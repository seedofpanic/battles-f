import React from 'react';
import {CharacterInfoComponent} from '../CharacterInfo/CharacterInfoComponent';
import style from './TeamBlockComponent.style.css';
import {doAction} from '../../store/actions';
import {WSService} from '../../WSService';

export class TeamBlockComponent extends React.Component {
    render() {
        const position = this.props.isMyTeam ? 'left' : 'right';

        return <div className={style.block + ' ' + style[position]}>
            {Object.keys(this.props.team.characters).map(characterId =>
            <CharacterInfoComponent key={characterId}
                                    onSelectUnit={() => this.selectUnit(characterId)}
                                    position={position}
                                    isSelected={characterId === this.props.selectedId}
                                    isTargeted={characterId === this.props.targetId}
                                    character={this.props.team.characters[characterId]}/>
            )}
        </div>;
    }

    selectUnit(characterId) {
        if (this.props.isMyTeam) {
            doAction('select_unit', characterId);
        } else if (characterId !== this.props.targetId) {
            WSService.sendAction('select_target', {
                unitId: this.props.selectedId,
                targetId: characterId,
            });
            doAction('select_target', characterId);
        }
    }
}