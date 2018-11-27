import {Component, Input} from '@angular/core';
import {ICharacter} from '../../../models/ICharacter';
import {ISkill} from '../../../models/ISkill';
import {GameService} from '../../../services/game.service';

@Component({
    selector: 'selectedCharacterComponent',
    templateUrl: 'selectedCharacterComponent.html',
    styleUrls: ['selectedCharacterComponent.css']
})
export class SelectedCharacterComponent {
    @Input() character: ICharacter;
    @Input() skills: ISkill[];

    constructor(private gameService: GameService) {
    }

    selectCharacter() {
        this.gameService.selectCharacter(this.character);
    }
}