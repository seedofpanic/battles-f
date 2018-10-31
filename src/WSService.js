import {onServerMessageHook} from './store/effects/serverHooks';

export class WSService {
    static ws;

    static init() {
        this.ws = new WebSocket(`ws://${process.env.REACT_APP_WS_URL}/ws`);

        this.ws.onmessage = msg => {
            onServerMessageHook(msg.data);
        };

        this.ws.onopen = () => {
            this.sendAction('info');
        };
    }


    static sendAction(type, payload) {
        this.ws.send(JSON.stringify({type, payload}));
    }
}