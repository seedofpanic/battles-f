import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {store} from './store';
import {NotesComponent} from './components/Notes/NotesComponent';
import {CharactersSelectComponent} from './components/CharactersSelect/CharactersSelectComponent';

class App extends Component {
    ws = new WebSocket("ws://localhost:3003/ws");

    componentDidMount() {

        this.ws.onmessage = msg => {
            store.dispatch(JSON.parse(msg.data));
        };

        this.ws.onopen = () => {
            this.doAction('info');
        };
    }

    render() {
        return (
            <div className="App">
                <button onClick={() => this.startBattle()}>Start battle</button>
                {this.props.game.characters_select
                    ? <CharactersSelectComponent characters={this.props.game.characters_select}/>
                    : ''
                }
                <NotesComponent notes={this.props.notes}/>
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

export default connect(
    state => state
)(App);
