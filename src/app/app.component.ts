import {Component} from '@angular/core';
import {ICharacter} from './models/ICharacter';
import {GameService} from './services/game.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    fbLoginUrl = '/auth/facebook';
    logoutUrl = '/auth/logout';
    charactersSelect: ICharacter[];
    selectedId: number;
    selectedCharacterId: number;

    constructor(public gameService: GameService) {

    }

    startBattle(withBot: boolean) {
        this.gameService.start(withBot)
    }
}
