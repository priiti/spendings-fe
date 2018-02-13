import { combineReducers, createStore } from 'redux';
import spendingsReducer from './../reducers/spendings';
import filtersReducer from './../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      spendings: spendingsReducer,
      filters: filtersReducer
    }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  return store;
};
