import React from 'react';
import { shallow } from 'enzyme';
import { SpendingsSummary } from './../../components/SpendingsSummary';

test('should correctly render SpendingsSummary with 1 spending', () => {
  const wrapper = shallow(<SpendingsSummary spendingsCount={1} spendingsTotal={235}/>)
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render SpendingsSummary with multiple spendings', () => {
  const wrapper = shallow(<SpendingsSummary spendingsCount={1} spendingsTotal={23512340987}/>)
  expect(wrapper).toMatchSnapshot();
});
