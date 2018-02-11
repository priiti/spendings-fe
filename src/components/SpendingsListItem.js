import React from 'react';

const SpendingsListItem = (props) => {
  const { description, amount, createdAt } = props;

  return (
    <div>
      <h3>{description}</h3>
      <p>{amount}-{createdAt}</p>
    </div>
  );
};

export default SpendingsListItem;
