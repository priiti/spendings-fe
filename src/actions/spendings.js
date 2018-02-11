import uuid from 'uuid';
import {
  ADD_SPENDING,
  EDIT_SPENDING,
  REMOVE_SPENDING
} from './../constants/spendingsConstants';

/**
 * @param {string} description Description for spending, default empty
 * @param {string} note Additional description for spending, default empty
 * @param {number} amount Spending amount, default 0
 * @param {number} createdAt Spending create date, default 0
 */
export const addSpending = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: ADD_SPENDING,
  spending: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

/**
 * @param {string} id Specify id to remove a spending, default empty
 * @param {object} updates Specify spending items to be updated
 */
export const editSpending = (id, updates) => ({
  type: EDIT_SPENDING,
  id,
  updates
});

/**
 * @param {string} id Specify id to remove a spending, default empty
 */
export const removeSpending = ({ id = '' } = {}) => ({
  type: REMOVE_SPENDING,
  id
});
