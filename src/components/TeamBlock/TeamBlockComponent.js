import React from 'react';
import {CharacterInfoComponent} from '../CharacterInfo/CharacterInfoComponent';
import style from './TeamBlockComponent.style.css';

export class TeamBlockComponent extends React.Component {
    render() {
        return <div className={style.block + ' ' + style[this.props.position]}>
            {Object.keys(this.props.team.characters).map(characterId =>
            <CharacterInfoComponent key={characterId}
                                    position={this.props.position}
                                    character={this.props.team.characters[characterId]}/>
            )}
        </div>;
    }
}