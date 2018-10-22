import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {NotesComponent} from './components/Notes/NotesComponent';
import {CharactersSelectComponent} from './components/CharactersSelect/CharactersSelectComponent';
import {WSService} from './WSService';
import {startBattleAction} from './store/actions/startBattleAction';

class App extends Component {

    componentDidMount() {
        WSService.init();
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
        startBattleAction();
    }
}

export default connect(
    state => state
)(App);
