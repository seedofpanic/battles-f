import React from 'react';
import {cancelFightAction} from '../../store/actions/cancelFightAction';

export class CancelFightComponent extends React.Component {
    render() {
        return <div>            
                <button onClick={() => this.cancelFight()}>Cancel fight</button>
        </div>;
    }

    cancelFight() {
        cancelFightAction();
    }
}