import {WSService} from '../../WSService';
import {doAction} from './index';

export function selectSkillAction(id) {
    doAction('select_skill', []);
    WSService.sendAction('select_skill', id);
}