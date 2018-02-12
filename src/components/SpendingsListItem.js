import React from 'react';

const SpendingsListItem = (props) => {
  const { 
    amount, 
    createdAt,
    description, 
    id, 
    removeSpending
  } = props;

  return (
    <div>
      <h3>{description}</h3>
      <p>{amount}-{createdAt}</p>
      <button onClick={() => {
        removeSpending({ id })
      }}>Remove</button>
    </div>
  );
};

export default SpendingsListItem;
