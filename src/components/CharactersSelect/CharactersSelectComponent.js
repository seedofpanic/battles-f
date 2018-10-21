import React from 'react';

export class CharactersSelectComponent extends React.Component {
    render() {
        return <div>
            {this.props.characters.map((character, index) => <button key={index}>{character.name}</button>)}
        </div>;
    }
}