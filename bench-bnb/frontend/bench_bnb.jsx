import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { signup, login, logout } from "./util/session_api_util";
import * as SessionActions from "./actions/session_actions";
import configureStore from "./store/store";


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  testActions();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
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
