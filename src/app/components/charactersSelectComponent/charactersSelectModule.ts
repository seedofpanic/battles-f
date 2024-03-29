import {NgModule} from '@angular/core';
import {CharactersSelectComponent} from './charactersSelectComponent';
import {CommonModule} from '@angular/common';
import {SelectedCharacterComponent} from './selectedCharacterComponent/selectedCharacterComponent';
import {CharactersModule} from '../characters/characters.module';

@NgModule({
    imports: [
        CommonModule,
        CharactersModule
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