import {NgModule} from '@angular/core';
import {NecromancerSkillsComponent} from './necromancerSkills.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    entryComponents: [
        NecromancerSkillsComponent
    ],
    declarations: [
        NecromancerSkillsComponent
    ]
})
export class NecromancerModule {
}