import React from 'react';

const EditPage = (props) => {
  console.log(props);

  return (
    <div>
      Editing expense with id {props.match.params.id} page
    </div>
  );
};

export default EditPage;
