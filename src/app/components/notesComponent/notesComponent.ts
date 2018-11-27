import {Component, Input} from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'notesComponent',
    templateUrl: 'notesComponent.html',
    styleUrls: ['notesComponent.css']
})
export class NotesComponent {
    notes: any[];

    constructor(gameService: GameService) {
        this.notes = gameService.notes;
    }
}