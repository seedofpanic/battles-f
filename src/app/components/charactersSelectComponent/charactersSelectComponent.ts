import {Component, Input} from '@angular/core';
import {ICharacter} from '../../models/ICharacter';

@Component({
    selector: 'charactersSelectComponent',
    templateUrl: './charactersSelectComponent.html',
    styleUrls: ['charactersSelectComponent.css']
})
export class CharactersSelectComponent {
    @Input() characters: any[];
    selectedCharacter: ICharacter;

    setSelected(character: ICharacter) {
        this.selectedCharacter = character;
    }
}