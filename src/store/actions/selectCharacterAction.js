import {WSService} from '../../WSService';
import {doAction} from './index';

export function selectCharacterAction(id) {
    doAction('hide_select_character');
    WSService.sendAction('select_character', id);
}