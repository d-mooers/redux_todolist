import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import todoApp from './reducers/combinedReducer'
import { Provider } from 'react-redux';

const store = createStore(todoApp);
//const unsubscribe = store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App id={0} />
  </Provider>,
  document.getElementById('root')
);
