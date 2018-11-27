import {NgModule} from '@angular/core';
import {SkillSelectComponent} from './skillSelectComponent';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SkillSelectComponent
    ],
    exports: [
        SkillSelectComponent
    ]
})
export class SkillSelectModule {
}