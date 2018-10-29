import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NotesComponent} from './components/Notes/NotesComponent';
import {WSService} from './WSService';
import {startBattleAction} from './store/actions/startBattleAction';
import {SkillSelectComponent} from './components/SkillSelect/SkillSelectComponent';
import style from './App.css';
import {Popups} from './components/Popups/Popups';
import {CharacterInfoComponent} from './components/CharacterInfo/CharacterInfoComponent';
import {CharactersSelectComponent} from './components/CharactersSelect/CharactersSelectComponent';

class App extends Component {

    componentDidMount() {
        WSService.init();
    }

    render() {
        return (
            <div className={style.App}>
                {
                    this.props.game.characters_select ?
                        <CharactersSelectComponent characters={this.props.game.characters_select}
                                                   selectedId={this.props.game.selectedId}/>
                        : <div className={style.arena}>
                            {this.props.game.characters && this.props.game.characters[this.props.game.myId] ?
                                <CharacterInfoComponent position='left'
                                                        character={this.props.game.characters[this.props.game.myId]}/>
                                : ''}
                            {this.props.game.characters && this.props.game.characters[this.props.game.opponentId] ?
                                <CharacterInfoComponent position='right'
                                                        character={this.props.game.characters[this.props.game.opponentId]}/>
                                : ''}
                            {this.props.inBattle ?
                                '' :
                                <div>
                                    <button className={style.startButton} onClick={() => this.startBattle()}>Start battle</button>
                                    <button className={style.startButton} onClick={() => this.startBattle(true)}>Start AI battle</button>
                                </div>
                            }
                            <div className={style.mySkillsSelect}>
                                {this.props.game.skill_select
                                    ? <SkillSelectComponent skills={this.props.game.skill_select}/>
                                    : ''
                                }
                            </div>
                            <div className={style.myLog}>
                                <NotesComponent notes={this.props.notes}/>
                            </div>
                        </div>
                }
                <Popups popups={this.props.popups}/>
                <h2 className={style.label}>Pre alpha v0.3</h2>
            </div>
        );
    }

    startBattle(withBot) {
        startBattleAction(withBot);
    }
}

export default connect(
    state => state
)(App);
