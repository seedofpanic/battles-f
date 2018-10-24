import {store} from './store';

export class WSService {
    static ws;

    static init() {
        this.ws = new WebSocket(`ws://${process.env.REACT_APP_WS_URL}/ws`);

        this.ws.onmessage = msg => {
            store.dispatch(JSON.parse(msg.data));
        };

        this.ws.onopen = () => {
            this.sendAction('info');
        };
    }


    static sendAction(type, payload) {
        this.ws.send(JSON.stringify({type, payload}));
    }
}