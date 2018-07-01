import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

// Test to render expenses to ExpenseList
test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />); // Expenses prop is set to expenses test data
    expect(wrapper).toMatchSnapshot();
});

// Test to render empty Expense List
test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />); // Will render empty array
    expect(wrapper).toMatchSnapshot();
});