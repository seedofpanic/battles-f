import {onServerMessageHook} from './store/effects/serverHooks';
import {setAuthAction} from './store/actions/setAuthAction';

export class WSService {
    static ws;

    static init() {
        fetch('/auth')
            .then(response => {
                return response.json();
            })
            .then(result => {
                setAuthAction(result.auth);

                this.ws = new WebSocket(`ws://${process.env.REACT_APP_WS_URL}/ws`);

                this.ws.onmessage = msg => {
                    onServerMessageHook(msg.data);
                };

                this.ws.onopen = () => {
                    this.sendAction('info');
                };
            });
    }


    static sendAction(type, payload) {
        this.ws.send(JSON.stringify({type, payload}));
    }
}