import {NgModule} from '@angular/core';
import {VampireSkillsComponent} from './vampireSkills.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    entryComponents: [
        VampireSkillsComponent
    ],
    declarations: [
        VampireSkillsComponent
    ]
})
export class VampireModule {
}