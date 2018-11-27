import {Component} from '@angular/core';
import {TimerService} from '../../services/timer.service';

@Component({
    selector: 'timerComponent',
    templateUrl: 'timerComponent.html'
})
export class TimerComponent {
    constructor(public timerService: TimerService) {
    }
}