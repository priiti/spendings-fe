import React from 'react';
import { connect } from 'react-redux';
import SpendingsListItem from './SpendingsListItem';
import getFilteredSpendings from './../selectors/spendings';
import { removeSpending } from './../actions/spendings';

const SpendingsList = (props) => (
  <div>
    <h1>Spendings list</h1>
    <ul>
      {props.spendings.map((spending) => {
        return <SpendingsListItem key={spending.id} {...spending} />
      })}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    spendings: getFilteredSpendings(state.spendings, state.filters)
  };
};

export default connect(mapStateToProps, {})(SpendingsList);
