import {NgModule} from '@angular/core';
import {TimerComponent} from './timerComponent';
import {TimerService} from '../../services/timer.service';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [TimerComponent],
    exports: [TimerComponent],
    providers: [TimerService]
})
export class TimerModule {
}