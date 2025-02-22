import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducers/index';

const { worker } = require('./mocks/browser');
worker.start();


// ??? IDK why yet this isn't connectiong my store
const store = createStore(reducer, applyMiddleware(thunk, logger));

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />, 
    </Provider>,
    
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.