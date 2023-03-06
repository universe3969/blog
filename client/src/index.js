import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = document.getElementById('root');
createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
// createRoot(document.getElementById('root')).render(<App />);