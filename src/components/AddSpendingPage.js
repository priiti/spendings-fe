import React from 'react';
import SpendingForm from './SpendingForm';

// NOT IN USE, CONSIDER DELETING

const AddSpendingPage = () => (
  <div>
    <h1>Add new spending</h1>
    <SpendingForm onSubmit={(spending) => {
      console.log(spending)
    }} />
  </div>
);

export default AddSpendingPage;
