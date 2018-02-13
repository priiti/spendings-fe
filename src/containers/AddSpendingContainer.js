import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SpendingForm from './../components/SpendingForm';
import { addSpending } from './../actions/spendings';

const AddSpendingContainer = (props) => <SpendingForm {...props} />

const mapStateToProps = (props) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addSpending
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSpendingContainer);
