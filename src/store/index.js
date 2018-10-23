import { createReducer } from 'redux-create-reducer';
import { createStore } from 'redux';

export const store = createStore(createReducer({
    notes: [],
    game: {}
}, {
    note: showNote,
    select_character: selectCharacter,
    select_skill: selectSkill,
    character_update: characterUpdate,
    set_my_id: setMyId,
    set_opponent_id: setOpponentId
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
            myId: payload
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

function characterUpdate(state, {payload}) {
    return {
        ...state,
        game: {
            ...state.game,
            characters: {
                ...state.game.characters,
                [payload.id]: {
                    ...(state.game.characters || {[payload.id]: {}})[payload.id],
                    ...payload.data
                }
            }
        }
    }
}

function showNote(state, {payload}) {
    return {
        ...state,
        notes: [
            ...state.notes,
            typeof payload !== 'string' ? JSON.stringify(payload) : payload
        ]
    };
}

function selectCharacter(state, {payload}) {
    return {
        ...state,
        game: {
            ...state.game,
            characters_select: payload
        }
    };
}
