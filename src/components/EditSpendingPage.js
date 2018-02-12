import React from 'react';

const EditSpendingPage = (props) => {
  return (
    <div>
      Editing expense with id {props.match.params.id} page
    </div>
  );
};

export default EditSpendingPage;
