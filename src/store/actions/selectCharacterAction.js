import {WSService} from '../../WSService';
import {doAction} from './index';

export function selectCharacterAction(id) {
    doAction('select_character', []);
    WSService.sendAction('select_character', id);
}