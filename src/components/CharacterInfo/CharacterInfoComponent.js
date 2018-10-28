import React from 'react';

export class CharacterInfoComponent extends React.Component {
    render() {
        const character = this.props.character;

        return <div>
            <div>{character.name}</div>
            <div>{character.health.toFixed(2)}/{character.healthMax.toFixed(2)}</div>
            {character.effects ?
                <ul>
                    {character.effects.map((effect, index) =>
                        <li key={index}>{effect.name}: {effect.ticks}</li>
                    )}
                </ul>
                : ''
            }
        </div>;
    }
}