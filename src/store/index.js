import { createReducer } from 'redux-create-reducer';
import { createStore } from 'redux';

export const store = createStore(createReducer({
    notes: [],
    game: {}
}, {
    note: showNote,
    select_character: selectCharacter
}));

function showNote(state, action) {
    return {
        ...state,
        notes: [
            ...state.notes,
            typeof action.payload !== 'string' ? JSON.stringify(action.payload) : action.payload
        ]
    };
}

function selectCharacter(state, action) {
    return {
        ...state,
        game: {
            ...state.game,
            characters_select: action.payload
        }
    };
}