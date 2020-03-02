import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { history } from './utils';
import { configApi } from './api';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';


configApi();

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'));