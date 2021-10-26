import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import { rootReducer } from './store/reducers/rootReducer';
import { Provider } from "react-redux";
import './fonts/Roboto-Bold.ttf';
import './fonts/Roboto-Medium.ttf';
import './fonts/Roboto-Regular.ttf';
import './fonts/Roboto-Light.ttf';
import './fonts/Roboto-Thin.ttf';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
