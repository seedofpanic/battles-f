import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';

@Injectable()
export class TimerService {
    private ends: Moment;
    timer = null;

    start(seconds) {
        this.ends = moment().add(seconds, 'seconds');
        this.updateTimer()
    }

    updateTimer() {
        const diff = this.ends.diff(new Date(), 'seconds');

        if (diff > 0) {
            this.timer = diff;
            setTimeout(() => {
                this.updateTimer();
            }, 1000);
        } else {
            this.timer = null;
        }
    }
}