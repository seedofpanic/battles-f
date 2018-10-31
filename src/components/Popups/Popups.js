import React from 'react';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import style from './Popups.css';
import {CharactersSelectComponent} from '../CharactersSelect/CharactersSelectComponent';
import {store} from '../../store/store';

const popupComponents = {
    'CharactersSelectComponent': CharactersSelectComponent
};

export class Popups extends React.Component {
    render() {
        return this.props.popups.map((popup, index) =>
            <div className={style.popup} key={index}>
                <Provider store={store}>
                    {React.createElement(
                        connect(state => popup.mappings(state) || state)(popupComponents[popup.component])
                    )}
                </Provider>
            </div>
        );
    }
}
