import React from 'react';
import style from './SkillSelectComponent.css';
import {selectSkillAction} from '../../store/actions/selectSkillAction';

export class SkillSelectComponent extends React.Component {
    render() {
        return <div className={style.block}>
            {this.props.skills.map((skill, index) =>
                <button key={index} onClick={() => this.selectSkill(skill.id)}>{skill.name}</button>)}
        </div>;
    }

    selectSkill(id) {
        selectSkillAction(id);
    }
}