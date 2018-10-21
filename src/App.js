import React, {Component} from 'react';
import './App.css';

class App extends Component {
    ws = new WebSocket("ws://localhost:3003/ws");

    componentDidMount() {

        this.ws.onmessage = msg => {
            console.log(msg);
        };

        this.ws.onopen = () => {
            this.doAction('info');
        };
    }

    render() {
        return (
            <div className="App">
                <button onClick={() => this.startBattle()}>Start battle</button>
            </div>
        );
    }

    startBattle() {
        this.doAction('start');
    }

    doAction(action, payload) {
        this.ws.send(JSON.stringify({action, payload}));
    }
}

export default App;
