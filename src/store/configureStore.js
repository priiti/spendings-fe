import { combineReducers, createStore } from 'redux';
import spendingsReducer from './../reducers/spendings';
import filtersReducer from './../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      spendings: spendingsReducer,
      filters: filtersReducer
    })
  );
  
  return store;
};
