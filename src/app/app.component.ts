import {Component, OnInit} from '@angular/core';
import {GameService} from './services/game.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    fbLoginUrl = '/auth/facebook';
    logoutUrl = '/auth/logout';
    withBot: boolean;

    constructor(public gameService: GameService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const duelMatch = window.location.search.match(/start=(.*?)(&|$)/);

        if (duelMatch) {
            this.gameService.combatId = duelMatch[1];
            this.gameService.getCharacterList(false, true);
        }
    }

    startBattle(withBot: boolean, withLink: boolean = false) {
        this.gameService.getCharacterList(withBot, withLink);
    }
}
