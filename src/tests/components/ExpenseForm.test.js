import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import { SingleDatePicker } from 'react-dates';

// Test if Expense Form renders correctly
test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

//Test to render data in Expense Form
test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

// Test to render error for invalid form submission
test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {} // Need to set preventDefault to arrow function that does nothing
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0); // If error string is empty, test will fail
    expect(wrapper).toMatchSnapshot();
});

// Test to set description on input change
// 1. Render expense form
// 2. Change the input
// 3. Make an assertion, checking that the description state was set
test('should set input on description change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value } // Calling e.target.value
    }); //  'Description' is first input field in form, hence why we had to call input at index zero
    expect(wrapper.state('description')).toBe(value);
});

// Test to set note on textarea change
test('should set note on textarea change', () => {
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    }); // Don't need .at(#) here because there is only one <textarea> field
    expect(wrapper.state('note')).toBe(value);
});

// Valid input will set 'amount' correctly
test('should set amount if valid input', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

// Will not set amount if invalid input
test('should not set amount if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(''); // We want nothing instead of an actual value
});

// 1. Render Expense Form with valid data
// 2. Simulate submission
// 3. Make sure the state was cleared
// 4. Ensure that onSubmit prop was called with the correct object & with correctly formatted information
test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');  // Error value needs to be empty, then form will submit properly
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    });
});

// Test onDateChange
test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

// test onFocusChange
test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});