import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addSpending } from './actions/spendings';
import { setTextFilter } from './actions/filters';
import getFilteredSpendings from './selectors/spendings';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const filteredSpendings = getFilteredSpendings(state.spendings, state.filters);
  // console.log(filteredSpendings);
})

const root = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(root, document.getElementById('app'));
