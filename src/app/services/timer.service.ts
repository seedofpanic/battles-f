import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';

@Injectable()
export class TimerService {
    private ends: Moment;
    timer = null;
    timerId: number;

    start(seconds) {
        this.ends = moment().add(seconds, 'seconds');
        this.updateTimer();
    }

    stop() {
        if (!this.timerId) {
            return;
        }

        clearTimeout(this.timerId);
        this.timerId = null;
        this.timer = null;
    }

    updateTimer() {
        const diff = this.ends.diff(new Date(), 'seconds');

        if (diff > 0) {
            this.stop();
            this.timer = diff;
            this.timerId = setTimeout(() => {
                this.updateTimer();
            }, 1000);
        } else {
            this.timer = null;
        }
    }
}