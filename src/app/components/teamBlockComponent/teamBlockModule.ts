import {NgModule} from '@angular/core';
import {TeamBlockComponent} from './teamBlockComponent';
import {CharacterInfoComponent} from './characterInfoComponent/characterInfoComponent';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TeamBlockComponent,
        CharacterInfoComponent
    ],
    exports: [
        TeamBlockComponent
    ]
})
export class TeamBlockModule {
}