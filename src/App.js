import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NotesComponent} from './components/Notes/NotesComponent';
import {WSService} from './WSService';
import {startBattleAction} from './store/actions/startBattleAction';
import {SkillSelectComponent} from './components/SkillSelect/SkillSelectComponent';
import {CancelFightComponent} from "./components/CancelFight/CancelFightComponent";
import style from './App.css';
import {Popups} from './components/Popups/Popups';
import {CharactersSelectComponent} from './components/CharactersSelect/CharactersSelectComponent';
import {TeamBlockComponent} from './components/TeamBlock/TeamBlockComponent';

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
                            {this.props.game.teams && this.props.game.teams[this.props.game.myTeam] ?
                                <TeamBlockComponent isMyTeam={true}
                                                    selectedId={this.props.game.selectedCharacterId}
                                                    team={this.props.game.teams[this.props.game.myTeam]}/>
                                : ''}
                            {this.props.game.teams && this.props.game.teams[this.props.game.opponentTeam] ?
                                <TeamBlockComponent isMyTeam={false}
                                                    selectedId={this.props.game.selectedCharacterId}
                                                    targetId={this.getTargetId()}
                                                    team={this.props.game.teams[this.props.game.opponentTeam]}/>
                                : ''}
                            {this.props.inBattle ?
                                '' :
                                <div>
                                    <button className={style.startButton} onClick={() => this.startBattle()}>Start battle</button>
                                    <button className={style.startButton} onClick={() => this.startBattle(true)}>Start AI battle</button>
                                </div>
                            }
                            {this.props.game.skill_select?
                                <div className={style.mySkillsSelect}>
                                    <SkillSelectComponent skills={this.props.game.skill_select}/>
                                    <CancelFightComponent />
                                </div>
                                : ''
                            }
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

    getTargetId() {
        if (!this.props.game.myTeam ||
            !this.props.game.teams[this.props.game.myTeam] ||
            !this.props.game.teams[this.props.game.myTeam].characters[this.props.game.selectedCharacterId]) {
            return;
        }

        return this.props.game.teams[this.props.game.myTeam].characters[this.props.game.selectedCharacterId].targetId;
    }
}

export default connect(
    state => state
)(App);
