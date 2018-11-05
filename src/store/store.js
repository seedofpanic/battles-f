import { createReducer } from 'redux-create-reducer';
import { createStore } from 'redux';
import { SupportedLanguagesEnum } from "../localization/l10n-helper";

const initGame = {
    teams: {}
};

export const SET_IN_BATTLE_TYPE = 'set_in_battle';
export const SET_GLOBAL_LANG = 'set_global_lang';

export function GET_GLOBAL_LANG() {
    return store.getState().globalLang;
}

export const store = createStore(createReducer({
    notes: [],
    game: {
        ...initGame
    },
    popups: [],
    globalLang: SupportedLanguagesEnum.Ru,
}, {
    note: showNote,
    select_character: selectCharacter,
    hide_select_character: hideSelectCharacter,
    select_skill: selectSkill,
    character_update: characterUpdate,
    set_my_id: setMyId,
    set_opponent_id: setOpponentId,
    [SET_IN_BATTLE_TYPE]: setInBattle,
    set_selected_character: setSelectedCharacter,
    cookies: setCookies,
    select_unit: selectUnit,
    select_target: selectTarget,
    set_teams: setTeams,
    remove_unit: removeUnit,
    [SET_GLOBAL_LANG]: setGlobalLang
}));

function selectSkill(state, {payload}) {
    return {
        ...state,
        game: {
            ...state.game,
            skill_select: payload
        }
    };
}

function setMyId(state, {payload}) {
    return {
        ...state,
        game: {
            ...state.game,
            myId: payload,
            selectedCharacterId: payload
        }
    }
}

function setOpponentId(state, {payload}) {
    if (state.game.myId === payload) {
        return state;
    }

    return {
        ...state,
        game: {
            ...state.game,
            opponentId: payload
        }
    }
}

function selectUnit(state, {payload}) {
    return {
        ...state,
        game: {
            ...state.game,
            selectedCharacterId: payload
        }
    }
}

function selectTarget(state, {payload}) {
    return {
        ...state,
        game: {
            ...state.game,
            teams: {
                ...state.game.teams,
                [state.game.myTeam]: {
                    ...state.game.teams[state.game.myTeam],
                    characters: {
                        ...state.game.teams[state.game.myTeam].characters,
                        [state.game.selectedCharacterId]: {
                            ...state.game.teams[state.game.myTeam].characters[state.game.selectedCharacterId],
                            targetId: payload
                        }
                    }
                }
            }
        }
    }
}

function characterUpdate(state, {payload}) {
    const team = state.game.teams[payload.team] || {};

    return {
        ...state,
        game: {
            ...state.game,
            teams: {
                ...state.game.teams,
                [payload.team]: {
                    ...state.game.teams[payload.team],
                    characters: {
                        ...team.characters,
                        [payload.id]: {
                            ...(team.characters || {})[payload.id],
                            ...payload.data
                        }
                    }
                }
            }
        }
    }
}

function showNote(state, {payload}) {
    return {
        ...state,
        notes: [
            typeof payload !== 'string' ? JSON.stringify(payload) : payload,
            ...state.notes
        ]
    };
}

function selectCharacter(state, {payload}) {
    return {
        ...state,
        game: {
            ...state.game,
            characters_select: payload
        },
        popups: [
            ...state.popups
        ]
    };
}

function hideSelectCharacter(state) {
    return {
        ...state,
        game: {
            ...state.game,
            characters_select: undefined
        }
    }
}

function setInBattle(state, {payload}) {
    if (payload) {
        return {
            ...state,
            inBattle: true
        }
    } else {
        return {
            ...state,
            inBattle: false,
            game: {
                ...initGame
            }
        }
    }
}

function setSelectedCharacter(state, {payload}) {
    return {
        ...state,
        game: {
            ...state.game,
            selectedId: payload
        }
    };
}

// TODO: move to effects
function setCookies(state, {payload}) {
    payload.forEach(cookie => {
        document.cookie = `${cookie.key}=${cookie.value}`;
    });

    return state;
}

function setTeams(state, {payload}) {
    return {
        ...state,
        game: {
            ...state.game,
            myTeam: payload.myTeam,
            opponentTeam: payload.opponentTeam,
            teams: {}
        }
    };
}

function removeUnit(state, {payload}) {
    const characters = Object.keys(state.game.teams[payload.team].characters).reduce((result, id) => {
        if (id !== payload.id) {
            result[id] = state.game.teams[payload.team].characters[id];
        }

        return result;
    }, {});

    return {
        ...state,
        game: {
            ...state.game,
            teams: {
                ...state.game.teams,
                [payload.team]: {
                    ...state.game.teams[payload.team],
                    characters: characters
                }
            }
        }
    }
}

function setGlobalLang(state, {payload}) {
    if (payload) {
        return {
            ...state,
            globalLang: payload
        };
    }

    return state;
}
