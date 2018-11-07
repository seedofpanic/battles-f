import React from 'react';
import {cancelFightAction} from '../../store/actions/cancelFightAction';
import {l10n_helper} from "../../localization/l10n-helper";
import style from './CancelFightComponent.css';

export class CancelFightComponent extends React.Component {

    l10n = new l10n_helper();

    render() {
        return <a href="#" className={style.myCancelButton} onClick={() => this.cancelFight()}>{this.l10n.lang('cancel_fight')}</a>
    }

    cancelFight() {
        cancelFightAction();
    }
}