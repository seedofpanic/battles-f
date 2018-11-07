import React from 'react';
import style from './NotesComponent.css';

export class NotesComponent extends React.Component {
    render() {
        return <div className={style.panel}>
            {this.props.notes.map((note, index) => <div key={index}>{note}</div>)}
        </div>;
    }
}