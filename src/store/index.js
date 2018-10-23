import { createReducer } from 'redux-create-reducer';
import { createStore } from 'redux';

export const store = createStore(createReducer({
    notes: [],
    game: {}
}, {
    note: showNote,
    select_character: selectCharacter,
    select_skill: selectSkill
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