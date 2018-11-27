import {NgModule} from '@angular/core';
import {NotesComponent} from './notesComponent';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NotesComponent
    ],
    exports: [
        NotesComponent
    ]
})
export class NotesModule {
}