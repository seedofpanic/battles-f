import React from 'react';
import style from './CharacterInfoComponent.css';

export class CharacterInfoComponent extends React.Component {
    render() {
        const character = this.props.character;

        return <div className={style[this.props.position] + ' ' + style.block}>
            <div className={style.portraitBox}>
                <div className={style['portrait_' + this.props.position] + ' ' + style.portrait}
                    style={{
                        backgroundImage: 'url(https://res.cloudinary.com/dstnxq7wt/image/upload/v1540758665/battle/characters/' + character.id + '_full.png)'
                    }}></div>
            </div>
            <div className={style['hud_' + this.props.position] + ' ' + style.hud}>
                <div>{character.name}</div>
                <div>{character.health.toFixed(2)}/{character.healthMax.toFixed(2)}</div>
                {character.effects ?
                    <ul>
                        {character.effects.map((effect, index) =>
                            <li key={index} title={effect.name}>
                                <div className={style.effect + ' ' + (style[effect.id] || '')}></div>
                                : {effect.ticks}
                                </li>
                        )}
                    </ul>
                    : ''
                }
            </div>
        </div>;
    }
}