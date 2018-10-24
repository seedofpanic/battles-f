import React from 'react';

export class SelectedCharacterComponent extends React.Component {
    render() {
        const character = this.props.character;

        return <div>
            <div>{character.name}</div>
            <div>{character.health.toFixed(2)}/{character.healthMax.toFixed(2)}</div>
        </div>;
    }
}