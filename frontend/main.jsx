import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'components/root';
import configureStore from 'store/store';
import preloadState from 'store/preload';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore(preloadState());
  ReactDOM.render(<Root store={store} />, root);
});
