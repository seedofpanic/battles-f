import {WSService} from '../../WSService';
import {doAction} from './index';

export function cancelFightAction() {
    doAction('select_skill', []);
    WSService.sendAction('cancel_fight', {});
}