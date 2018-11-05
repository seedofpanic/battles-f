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
import {doAction} from "./store/actions";
import {l10n_helper, SupportedLanguagesEnum} from "./localization/l10n-helper";
import {SET_GLOBAL_LANG} from "./store/store";

class App extends Component {

    l10n = new l10n_helper();

    componentDidMount() {
        WSService.init();

        doAction(SET_GLOBAL_LANG, SupportedLanguagesEnum.Ru);
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
                                    <button className={style.startButton} onClick={() => this.startBattle()} >{
                                        this.l10n.lang('start_battle')
                                    }</button>
                                    <button className={style.startButton} onClick={() => this.startBattle(true)} >{
                                        this.l10n.lang('start_ai_battle')
                                    }</button>
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

                <h2 className={style.label}>{
                    this.l10n.lang('pre_alpha_v0.3')
                }</h2>

                {
                    this.props.inBattle ?
                        '' :
                        <div className={style.languageSelector}>
                            <button onClick={() => {
                                doAction(SET_GLOBAL_LANG, SupportedLanguagesEnum.Ru);
                            }}>
                                Русский
                            </button>
                            <button onClick={() => {
                                doAction(SET_GLOBAL_LANG, SupportedLanguagesEnum.En);
                            }}>
                                English
                            </button>
                        </div>
                }
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
