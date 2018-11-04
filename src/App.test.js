import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./store/store";
import {Provider} from "react-redux";
import {Server} from 'mock-socket';

beforeEach(() => {
    const mockServer = new Server('ws://battle.mobmind.ru:3003/ws');

    mockServer.on('connection', ws => {});
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
