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
import {SupportedLanguagesEnum} from "./localization/l10n-helper";
import {SET_GLOBAL_LANG} from "./store/store";
import {setLanguageAction} from './store/actions/setLanguageAction';
import l10n_instance from "./localization/l10n-helper";

class App extends Component {

    componentDidMount() {
        WSService.init();

        const cookies = document.cookie.split('; ').reduce((result, cookie) => {
            const [key, value] = cookie.split('=');

            result[key] = value;

            return result;
        }, {});

        doAction(SET_GLOBAL_LANG, cookies['lang'] || SupportedLanguagesEnum.En);
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
                                        l10n_instance.lang('start_battle')
                                    }</button>
                                    <button className={style.startButton} onClick={() => this.startBattle(true)} >{
                                        l10n_instance.lang('start_ai_battle')
                                    }</button>
                                </div>
                            }
                            {this.props.game.skill_select ?
                                <div className={style.mySkillsSelect}>
                                    <SkillSelectComponent skills={this.props.game.skill_select}/>
                                    <CancelFightComponent />
                                </div>
                                : ''
                            }
                            <NotesComponent notes={this.props.notes}/>
                        </div>
                }
                <Popups popups={this.props.popups}/>

                <h2 className={style.label}>{
                    l10n_instance.lang('pre_alpha_v0.3')
                }</h2>

                {
                    this.props.inBattle ?
                        '' :
                        <div className={style.languageSelector}>
                            <button onClick={() => {
                                setLanguageAction(SupportedLanguagesEnum.Ru);
                            }}>
                                Русский
                            </button>
                            <button onClick={() => {
                                setLanguageAction(SupportedLanguagesEnum.En);
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
