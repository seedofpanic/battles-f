import {store} from './store';

export class WSService {
    static ws;

    static init() {
        this.ws = new WebSocket("ws://localhost:3003/ws");

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