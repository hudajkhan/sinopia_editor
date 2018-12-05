// Copyright 2018 Stanford University see Apache2.txt for license

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { addInputLiteral } from './actions'
import { initialState } from './reducers'
import App from './components/App';

const store = createStore(applyMiddleware(initialState))
console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(addInputLiteral([ { content: "A string", id: 0 },
  { content: "A two string", id: 1 }]))

const root = document.createElement('div');
document.body.appendChild(root);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
