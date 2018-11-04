import {store, SET_IN_BATTLE_TYPE} from '../store';
import {WSService} from '../../WSService';

export function onServerMessageHook(data) {
    const action = JSON.parse(data);

    switch (action.type) {
        case SET_IN_BATTLE_TYPE:
            WSService.sendAction('info');
            break;
        default:
    }

    store.dispatch(action);
}