 /**
  * @param {string} text Filter by text keyword, default empty
  */
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

/** 
 * Sorts items by amount in descending order
*/
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

/** 
 * Sorts items by date in descending order
*/
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

/**
 * @param {number} startDate Starting date to return items only at or after certain date, default 0
 */
export const setStartDate = (startDate = 0) => ({
  type: 'SET_START_DATE',
  startDate
});

/**
 * @param {number} endDate End date to return items only at or after certain date, default 0
 */
export const setEndDate = (endDate = 0) => ({
  type: 'SET_END_DATE',
  endDate
});
