import React from 'react';

export class NotesComponent extends React.Component {
    render() {
        return <div>
            {this.props.notes.map((note, index) => <div key={index}>{note}</div>)}
        </div>;
    }
}