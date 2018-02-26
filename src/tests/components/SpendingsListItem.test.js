import React from 'react';
import { shallow } from 'enzyme';
import spendings from './../fixtures/spendings';
import SpendingsListItem from './../../components/SpendingsListItem';

test('should render SpendingsListItem correctly', () => {
  const wrapper = shallow(<SpendingsListItem {...spendings[0]} />);
  expect(wrapper).toMatchSnapshot();
});
