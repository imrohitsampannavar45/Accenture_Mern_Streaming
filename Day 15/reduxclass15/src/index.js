import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import App from './App';


const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
      <React.StrictMode >
      <App />
      </React.StrictMode>
    </Provider>
);
