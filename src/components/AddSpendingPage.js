import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSpending } from './../actions/spendings';
import SpendingForm from './SpendingForm';

const AddSpendingPage = (props) => (
  <div>
    <h1>Add new spending</h1>
    <SpendingForm
      onSubmit={(spending) => {
        props.addSpending(spending);
        props.history.push('/');
      }} 
    />
  </div>
);

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addSpending
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSpendingPage);
