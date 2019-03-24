import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ICharacter} from '../../models/ICharacter';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'teamBlockComponent',
    templateUrl: 'teamBlockComponent.html',
    styleUrls: ['teamBlockComponent.css']
})
export class TeamBlockComponent implements OnChanges {
    @Input() isMyTeam: boolean;
    @Input() team: string;
    @Input() position: string;

    characters: {[name: string]: ICharacter};

    constructor(public gameService: GameService) {
    }

    ngOnChanges({team}: SimpleChanges): void {
        if (team && team.currentValue) {
            this.characters = team.currentValue.characters;
        }
    }

    getCharactersKeys() {
        return Object.keys(this.characters);
    }

    selectUnit(selectedId: string) {
        if (this.isMyTeam) {
            this.gameService.setSelectedCharacter(selectedId);
        } else {
            this.gameService.setTarget(selectedId);
        }
    }
}