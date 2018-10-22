import React from 'react';
import {selectCharacterAction} from '../../store/actions/selectCharacterAction';

export class CharactersSelectComponent extends React.Component {
    render() {
        return <div>
            {this.props.characters.map((character, index) =>
                <button key={index} onClick={() => this.selectCharacter(character)}>{character.name}</button>)}
        </div>;
    }

    selectCharacter(character) {
        selectCharacterAction(character.id);
    }
}