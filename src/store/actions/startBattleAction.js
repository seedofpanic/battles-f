import {WSService} from '../../WSService';

export function startBattleAction(withBot) {
    WSService.sendAction('start', {withBot});
}
