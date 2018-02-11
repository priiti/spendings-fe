import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addSpending } from './actions/spendings';
import { setTextFilter } from './actions/filters';
import getVisibleSpendings from './selectors/spendings';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const filteredSpendings = getVisibleSpendings(state.spendings, state.filters);
  console.log(filteredSpendings);
})

store.dispatch(addSpending({ description: 'Car bill', amount: 20000, createdAt: 1000 }));
store.dispatch(addSpending({ description: 'Electricity bill', amount: 5000, createdAt: 3000 }));
store.dispatch(setTextFilter('elec'))

ReactDOM.render(<AppRouter />, document.getElementById('app'));
