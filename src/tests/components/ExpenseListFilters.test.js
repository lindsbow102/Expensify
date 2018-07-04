import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
         />
    );
});

// Test to render Expense List Filters
test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

// Testing Expense List Filters with alt data
// Need to change the filters prop to {altFilters}
test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

// Test to handle text change
test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

// Test to sort by date
test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });    
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

// Test to sort by amount
test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

// Test to handle date changes
test('should handle date changes', () => {
    const startDate = moment(0).add(2, 'days');
    const endDate = moment(0).add(5, 'days');
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate,endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// Test to handle date focus changes
test('should handle date focus changes', () => {
    const calendarFocused = 'endDate'; // The options here are null, 'startDate', or 'endDate'
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});