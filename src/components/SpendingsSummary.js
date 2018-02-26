import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getFilteredSpendings from './../selectors/spendings';
import selectSpendingsTotal from './../selectors/spendings-total';

export const SpendingsSummary = (props) => {
  const {
    spendingsCount,
    spendingsTotal
  } = props;

  const spendingsWord = spendingsCount === 1 ? 'spending' : 'spendings';
  const formattedSpendingsTotalSum = numeral(spendingsTotal / 100).format('$0.00');

  return (
    <div>
      {spendingsCount > 0 &&
        <h1>Viewing {spendingsCount} {spendingsWord} totaling {formattedSpendingsTotalSum}</h1>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleSpendings = getFilteredSpendings(state.spendings, state.filters);
  return {
    spendingsCount: visibleSpendings.length,
    spendingsTotal: selectSpendingsTotal(visibleSpendings),
  };
};

export default connect(mapStateToProps, {})(SpendingsSummary);
