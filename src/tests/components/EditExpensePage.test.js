import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'react-modal';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[2]} />);
});

// test EditExpensePage
test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

// test for editExpense function, using startEditExpense
test('should handle startEditExpense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

// Test that modal works on Remove Expense
// test('should open modal when remove expense is clicked', () => {
//     wrapper.find('button').simulate('click');
//     expect(wrapper.find(Modal).prop("modalOpen")).toEqual(true);
// });

// test for removeExpense function, using startRemoveExpense
test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});