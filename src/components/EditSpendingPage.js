import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SpendingsForm from './../components/SpendingsForm';
import { editSpending, removeSpending } from './../actions/spendings';

const EditSpendingPage = (props) => {
  const { id } = props.match.params;
  
  return (
    <div>
      <SpendingsForm
        spending={props.spending}
        onSubmit={(spending) => {
          props.editSpending(id, spending);
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.removeSpending({ id });
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    spending: state.spendings.find((spending) => spending.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editSpending,
    removeSpending
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSpendingPage);
