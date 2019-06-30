//Project Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Project Entry Point
import App from './App.jsx';

//State Management
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { requestUsers, onSearchChange, filterData, sortData } from './state/reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const rootReducers = combineReducers({ requestUsers, onSearchChange, filterData, sortData })
const logger = createLogger();
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
