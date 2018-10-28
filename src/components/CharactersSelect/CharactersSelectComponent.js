import React from 'react';
import {setSelectedCharacterAction} from '../../store/actions/setSelectedCharacterAction';
import {SelectedCharacterComponent} from './SelectedCharacterComponent';

export class CharactersSelectComponent extends React.Component {
    render() {
        return <div>
            {this.props.characters.map((character, index) =>
                <button key={index} onClick={() => this.setSelected(index)}>{character.name}</button>)}
            {this.props.characters[this.props.selectedId] ?
                <SelectedCharacterComponent character={this.props.characters[this.props.selectedId]}/>
                : ''
            }
        </div>;
    }

    setSelected(id) {
        setSelectedCharacterAction(id);
    }
}