import {Injectable} from '@angular/core';
import {APIService} from './api.service';
import {IAction} from '../models/IAction';
import {ICharacter} from '../models/ICharacter';
import {ISkill} from '../models/ISkill';
import {ITeam} from '../models/ITeam';
import {TimerService} from './timer.service';

@Injectable()
export class GameService {
    notes: string[] = [];
    isBattle: boolean;
    myTeamId: string;
    opponentTeamId: string;
    auth: boolean;
    charactersSelect: { [name: string]: ICharacter };
    teams: {[name: string]: ITeam};
    skills: ISkill;
    selectedCharacterId: string;
    targetsIds: {[name: string]: string} = {};

    private myId: number;

    constructor(private apiService: APIService, private timerService: TimerService) {
        this.apiService.subscribe(action => this.onServerAction(action))
    }

    onServerAction(action: IAction) {
        switch (action.type) {
            case 'auth':
                this.auth = action.payload;
                break;
            case 'set_my_id':
                this.myId = action.payload;
                break;
            case 'note':
                this.notes.unshift(action.payload);
                break;
            case 'set_in_battle':
                this.isBattle = action.payload;
                break;
            case 'set_teams':
                this.setTeams(action.payload);
                break;
            case 'select_character':
                this.charactersSelect = action.payload;
                break;
            case 'character_update':
                this.teams[action.payload.team].characters[action.payload.id] = {
                    ...this.teams[action.payload.team].characters[action.payload.id],
                    ...action.payload.data
                };
                break;
            case 'select_skill':
                this.skills = action.payload;

                if (this.isBattle) {
                    this.charactersSelect = null;
                }
                break;
            case 'show_timer':
                this.timerService.start(action.payload);
                break;
        }
    }

    private setTeams({myTeam, opponentTeam}) {
        this.teams = {
            [myTeam]: {
                characters: {}
            },
            [opponentTeam]: {
                characters: {}
            }
        };
        this.myTeamId = myTeam;
        this.opponentTeamId = opponentTeam;
    }

    start(withBot: boolean) {
        this.apiService.sendAction('start', {withBot});
    }

    selectCharacter(character: ICharacter) {
        this.apiService.sendAction('select_character', character.id);
        this.charactersSelect = null;
    }

    selectSkill(skill: ISkill) {
        this.apiService.sendAction('select_skill', skill.id);
        this.skills = null;
    }

    setSelectedCharacter(selectedId: string) {
        this.selectedCharacterId = selectedId;
    }

    setTarget(targetId: string) {
        if (this.selectedCharacterId && this.targetsIds[this.selectedCharacterId] !== targetId) {
            this.targetsIds[this.selectedCharacterId] = targetId;
            this.apiService.sendAction('select_target', {
                unitId: this.selectedCharacterId,
                targetId
            });
        }
    }

    cancelFight() {
        this.apiService.sendAction('cancel_fight', {});
    }
}