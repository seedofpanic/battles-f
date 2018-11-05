import {doAction} from './index';
import {SET_GLOBAL_LANG} from '../store';

export function setLanguageAction(lang) {
    doAction('cookies', [{
        key: 'lang',
        value: lang
    }]);
    doAction(SET_GLOBAL_LANG, lang);
}