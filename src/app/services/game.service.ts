import {Injectable} from '@angular/core';
import {APIService} from './api.service';
import {IAction} from '../models/IAction';
import {ICharacter} from '../models/ICharacter';
import {ISkill} from '../models/ISkill';
import {TimerService} from './timer.service';
import {ITeam} from '../models/ITeam';

@Injectable()
export class GameService {
    notes: string[] = [];
    isBattle: boolean;
    myTeamId: string;
    opponentTeamId: string;
    auth: boolean;
    charactersSelect: { [name: string]: ICharacter };
    skills: ISkill;
    teams: {[name: string]: ITeam};
    selectedCharacterId: string;
    targetsIds: {[name: string]: string} = {};
    withBot: boolean;
    withLink: boolean;
    duelLink: string;

    private myId: number;
    combatId: string;

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
                if (!this.isBattle) {
                    this.timerService.stop();
                    this.apiService.sendAction('info', '');
                }
                break;
            case 'duel_link':
                this.duelLink = action.payload;
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
            case 'character_selected':
                this.start();
                break;
        }
    }

    private setTeams({myTeam, opponentTeam}) {
        this.myTeamId = myTeam;
        this.opponentTeamId = opponentTeam;
        this.teams = {
            [myTeam]: {
                characters: {}
            },
            [opponentTeam]: {
                characters: {}
            }
        };
    }

    start() {
        if (this.withLink) {
            if (this.combatId) {
                this.apiService.sendAction('join', {combatId: this.combatId});
            } else {
                this.apiService.sendAction('invite', {});
            }
        } else {
            this.apiService.sendAction('start', {withBot: this.withBot});
        }
    }

    getCharacterList(withBot: boolean, withLink: boolean) {
        this.withBot = withBot;
        this.withLink = withLink;
        console.log('send');
        this.apiService.sendAction('get_character_list', null);
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

    join() {
        this.apiService.sendAction('join', this.duelLink);
    }
}