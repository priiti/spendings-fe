import {
  ADD_SPENDING,
  EDIT_SPENDING,
  REMOVE_SPENDING
} from './../constants/spendingsConstants';

const spendingsReducerDefaultState = [];

const spendingsReducer = (state = spendingsReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_SPENDING:
      return [...state, action.spending]

    case REMOVE_SPENDING:
      return state.filter((spending) => spending.id !== action.id);

    case EDIT_SPENDING:
      return state.map((spending) => {
        if (spending.id === action.id)
          return {
            ...spending,
            ...action.updates
          };
        else
          return spending;
      });
      
    default:
      return state;
  }
};

export default spendingsReducer;
