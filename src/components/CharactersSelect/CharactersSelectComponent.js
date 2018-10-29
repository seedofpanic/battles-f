import React from 'react';
import style from './CharactersSelectComponent.css';
import {setSelectedCharacterAction} from '../../store/actions/setSelectedCharacterAction';
import {SelectedCharacterComponent} from './SelectedCharacterComponent';

export class CharactersSelectComponent extends React.Component {
    render() {
        return <div className={style.block}>
            <div className={style.portraits}>
                {this.props.characters.map((character, index) =>
                    <div className={style.portrait + ' ' +
                    (this.props.selectedId === index ? style.selected : '')
                    } key={index} onClick={() => this.setSelected(index)}
                        style={{
                            backgroundImage: 'url(https://res.cloudinary.com/dstnxq7wt/image/upload/v1540758665/battle/characters/' + character.id + '.png)'
                        }}>
                    </div>)}
            </div>
            <div className={style.info}>
                {this.props.characters[this.props.selectedId] ?
                    <SelectedCharacterComponent character={this.props.characters[this.props.selectedId]}/>
                    : ''
                }
            </div>
        </div>;
    }

    setSelected(id) {
        setSelectedCharacterAction(id);
    }
}