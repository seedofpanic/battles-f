import {Component} from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'cancelFightComponent',
    templateUrl: 'cancelFightComponent.html',
    styleUrls: ['cancelFightComponent.css']
})
export class CancelFightComponent {

    constructor(private gameService: GameService) {
    }

    cancelFight() {
        this.gameService.cancelFight();
    }
}