import React from 'react';
import {cancelFightAction} from '../../store/actions/cancelFightAction';
import style from './CancelFightComponent.css';
import l10n_instance from "../../localization/l10n-helper";

export class CancelFightComponent extends React.Component {
    render() {
        return <a href="#" className={style.myCancelButton} onClick={() => this.cancelFight()}>{l10n_instance.lang('cancel_fight')}</a>
    }

    cancelFight() {
        cancelFightAction();
    }
}