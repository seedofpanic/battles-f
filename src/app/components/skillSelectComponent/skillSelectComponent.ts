import {Component, Input} from '@angular/core';
import {GameService} from '../../services/game.service';
import {ISkill} from '../../models/ISkill';

@Component({
    selector: 'skillSelectComponent',
    templateUrl: 'skillSelectComponent.html',
    styleUrls: ['skillSelectComponent.css']
})
export class SkillSelectComponent {
    @Input() skills = [];

    constructor(private gameService: GameService) {
    }

    selectSkill(skill: ISkill) {
        this.gameService.selectSkill(skill);
    }
}