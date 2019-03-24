import {Component} from '@angular/core';
import {GameService} from './services/game.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    fbLoginUrl = '/auth/facebook';
    logoutUrl = '/auth/logout';
    withBot: boolean;

    constructor(public gameService: GameService) {

    }

    startBattle(withBot: boolean) {
        this.gameService.getCharacterList(withBot);
    }
}
