import {doAction} from './index';

export function setAuthAction(auth) {
    doAction('set_auth', auth)
}