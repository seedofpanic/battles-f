import {WSService} from '../../WSService';

export function selectCharacterAction(id) {
    WSService.sendAction('select_character', id);
}