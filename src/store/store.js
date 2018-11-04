import { createReducer } from 'redux-create-reducer';
import { createStore } from 'redux';

const initGame = {
    teams: {}
};

export const SET_IN_BATTLE_TYPE = 'set_in_battle';

export const store = createStore(createReducer({
    notes: [],
    game: {
        ...initGame
    },
    popups: []
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
    set_teams: setTeams
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
            opponentTeam: payload.opponentTeam
        }
    };
}