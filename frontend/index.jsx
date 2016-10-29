import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';

import { login, logout, signup } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", (e) => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  ReactDOM.render(<h1>Hello world</h1>, rootEl);
});
