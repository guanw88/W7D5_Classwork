import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from "./util/session_api_util";
import * as SessionActions from "./actions/session_actions";
import configureStore from "./store/store";

document.addEventListener('DOMContentLoaded', () => {
  testActions();
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});

const testApiUtil = () => {
  window.signup = signup;
  window.login = login;
  window.logout = logout;
};

const testActions = () => {
  window.receiveCurrentUser = SessionActions.receiveCurrentUser;
  window.logoutCurrentUser = SessionActions.logoutCurrentUser;
  window.receiveErrors = SessionActions.receiveErrors;
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;
  window.signup = SessionActions.signup;
};
