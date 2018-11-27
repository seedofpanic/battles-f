import {Component, Input} from '@angular/core';

@Component({
    selector: 'characterInfoComponent',
    templateUrl: 'characterInfoComponent.html',
    styleUrls: ['characterInfoComponent.css']
})
export class CharacterInfoComponent {
    @Input() position: string;
    @Input() isSelected: boolean;
    @Input() isTargeted: boolean;
    @Input() character: any;

    onSelectUnit() {

    }
}