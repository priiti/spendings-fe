import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTextFilter, sortByDate, sortByAmount } from './../actions/filters';
import SpendingsListFilters from './../components/SpendingsListFilters';

const SpendingsListFiltersContainer = (props) => <SpendingsListFilters {...props} />

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTextFilter: setTextFilter,
    sortByDate: sortByDate,
    sortByAmount: sortByAmount
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpendingsListFiltersContainer);
