import {store} from '../store';

export function doAction(type, payload) {
    store.dispatch({
        type,
        payload
    });
}