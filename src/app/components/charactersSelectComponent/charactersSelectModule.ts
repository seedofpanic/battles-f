import {NgModule} from '@angular/core';
import {CharactersSelectComponent} from './charactersSelectComponent';
import {CommonModule} from '@angular/common';
import {SelectedCharacterComponent} from './selectedCharacterComponent/selectedCharacterComponent';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CharactersSelectComponent,
        SelectedCharacterComponent
    ],
    exports: [
        CharactersSelectComponent
    ]
})
export class CharactersSelectModule {
}