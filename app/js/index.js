//import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";
import { syncHistoryWithStore } from 'react-router-redux'
import {Provider} from 'react-redux';
import App from './components/app';
import store from './redux/store';


const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
        <Route path="/(:filter)" component={App} />
        </Router>
    </Provider>
    ),document.getElementById('main')
);
