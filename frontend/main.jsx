import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'components/root';
import configureStore from 'store/store';
import preloadState from 'store/preload';
import { receiveAllData } from 'actions/application-actions';

document.addEventListener('turbolinks:load', () => {
  const root = document.getElementById('root');
  const store = configureStore(preloadState());
  if (window.bacefook.preloadedState) {
    store.dispatch(receiveAllData(window.bacefook.preloadedState))
  }
  ReactDOM.render(<Root store={store} />, root);
});
