import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import Store from './app/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const rootNode = document.createElement('div');
  rootNode.id = 'root';
  const body = document.querySelector('body');
  body.appendChild(rootNode);
  const root = createRoot(document.getElementById('root'));
  root.render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
});
