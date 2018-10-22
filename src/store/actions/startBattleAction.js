import {WSService} from '../../WSService';

export function startBattleAction() {
    WSService.sendAction('start');
}
