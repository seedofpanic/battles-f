import React from 'react';
import {selectCharacterAction} from '../../store/actions/selectCharacterAction';

export class SelectedCharacterComponent extends React.Component {
    render() {
        return <div>
            <h2>{this.props.character.name}</h2>
            <div>
                <ul>{this.props.character.skills.map((skill, index) => <li key={index}>{skill.name}</li>)}</ul>
            </div>
            <button onClick={() => this.selectCharacter()}>Select</button>
        </div>;
    }

    selectCharacter() {
        selectCharacterAction(this.props.character.id);
    }
}