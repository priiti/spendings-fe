import React from 'react';
import SpendingsListItem from './SpendingsListItem';

const SpendingsList = (props) => (
  <div>
    <h1>Spendings list</h1>
    <ul>
      {props.spendings.map((spending) => {
        return <SpendingsListItem key={spending.id} {...spending} removeSpending={props.removeSpending}/>
      })}
    </ul>
  </div>
);

export default SpendingsList;
