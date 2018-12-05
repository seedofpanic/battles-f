import {NgModule} from '@angular/core';
import {BarbarianSkillsComponent} from './barbarianSkills.component';
import {AxeStrikeSkillComponent} from './skills/axeStrikeSkill.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    entryComponents: [
        BarbarianSkillsComponent
    ],
    declarations: [
        BarbarianSkillsComponent,
        AxeStrikeSkillComponent,
    ],
    exports: [
        BarbarianSkillsComponent
    ]
})
export class BarbarianModule {
}