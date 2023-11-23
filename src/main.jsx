import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this line
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);