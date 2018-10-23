import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NotesComponent} from './components/Notes/NotesComponent';
import {CharactersSelectComponent} from './components/CharactersSelect/CharactersSelectComponent';
import {WSService} from './WSService';
import {startBattleAction} from './store/actions/startBattleAction';
import {SkillSelectComponent} from './components/SkillSelect/SkillSelectComponent';
import {SelectedCharacterComponent} from './components/SelectedCharacter/SelectedCharacterComponent';
import style from './App.css';

class App extends Component {

    componentDidMount() {
        WSService.init();
    }

    render() {
        return (
            <div className={style.App}>
                <div className={style.me}>
                    {this.props.game.characters && this.props.game.characters[this.props.game.myId] ?
                        <SelectedCharacterComponent character={this.props.game.characters[this.props.game.myId]}/>
                        : ''}
                </div>
                <div className={style.opponent}>
                    {this.props.game.characters && this.props.game.characters[this.props.game.opponentId] ?
                        <SelectedCharacterComponent character={this.props.game.characters[this.props.game.opponentId]}/>
                        : ''}
                </div>
                <button onClick={() => this.startBattle()}>Start battle</button>
                {this.props.game.characters_select
                    ? <CharactersSelectComponent characters={this.props.game.characters_select}/>
                    : ''
                }
                {this.props.game.skill_select
                    ? <SkillSelectComponent skills={this.props.game.skill_select}/>
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
