import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';

const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
