import React from 'react';

const SpendingsListFilters = (props) => {
  const {
    filters: { text },
    setTextFilter,
    sortByDate,
    sortByAmount
  } = props;

  return (
    <div>
      <input type="text" value={text} onChange={(e) => {
          const { value } = e.target;

          setTextFilter(value);
        }}
      />
      <select 
        value={props.filters.sortBy} onChange={(e) => {
          if (e.target.value === 'date')
            sortByDate();
          else if (e.target.value=== 'amount')
            sortByAmount()
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

export default SpendingsListFilters;
