import {store} from '../index';

export function doAction(type, payload) {
    store.dispatch({
        type,
        payload
    });
}