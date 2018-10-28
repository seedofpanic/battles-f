import {doAction} from './index';

export function setSelectedCharacterAction(id) {
    doAction('set_selected_character', id);
}