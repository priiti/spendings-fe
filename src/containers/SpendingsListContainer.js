import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeSpending } from './../actions/spendings';
import getFilteredSpendings from './../selectors/spendings';
import SpendingsList from './../components/SpendingsList';

const SpendingsListContainer = (props) => <SpendingsList {...props} />

const mapStateToProps = (state) => {
  return {
    spendings: getFilteredSpendings(state.spendings, state.filters)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeSpending: removeSpending
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpendingsListContainer);
