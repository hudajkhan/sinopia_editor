// Copyright 2018 Stanford University see Apache2.txt for license

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const root = document.createElement('div');
document.body.appendChild(root);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
