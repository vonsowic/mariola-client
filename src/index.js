import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/App';
import websocket from './websocket'
import axiosInit from './axios'
import {callGetUnseenExchanges} from "./actions/notification";

axiosInit(store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));


websocket(store);

store.dispatch(callGetUnseenExchanges());