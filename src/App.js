import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NotesComponent} from './components/Notes/NotesComponent';
import {WSService} from './WSService';
import {startBattleAction} from './store/actions/startBattleAction';
import {SkillSelectComponent} from './components/SkillSelect/SkillSelectComponent';
import style from './App.css';
import {Popups} from './components/Popups/Popups';
import {CharacterInfoComponent} from './components/CharacterInfo/CharacterInfoComponent';

class App extends Component {

    componentDidMount() {
        WSService.init();
    }

    render() {
        return (
            <div className={style.App}>
                <h2 className={style.label}>Pre alpha v0.3</h2>
                <div className={style.me}>
                    {this.props.game.characters && this.props.game.characters[this.props.game.myId] ?
                        <CharacterInfoComponent character={this.props.game.characters[this.props.game.myId]}/>
                        : ''}
                </div>
                <div className={style.opponent}>
                    {this.props.game.characters && this.props.game.characters[this.props.game.opponentId] ?
                        <CharacterInfoComponent character={this.props.game.characters[this.props.game.opponentId]}/>
                        : ''}
                </div>
                {this.props.inBattle ?
                    '' :
                    <button className={style.startButton} onClick={() => this.startBattle()}>Start battle</button>
                }
                {this.props.game.skill_select
                    ? <SkillSelectComponent skills={this.props.game.skill_select}/>
                    : ''
                }
                <NotesComponent notes={this.props.notes}/>
                <Popups popups={this.props.popups}/>
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
