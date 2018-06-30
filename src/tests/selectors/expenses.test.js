import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

// Test for text filter
test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1] ]); // 1st expense should be filtered out--no 'e'
});

// Test for startDate filter
test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0), // will filter out anything before moment 0
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0] ]); // 3rd item will come first, 1st item will come second
})

// Test for endDate filter
test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined, 
        endDate: moment(0) // will filter out anything after moment 0
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1] ]);  // Again, will show most recent expense first
});

// Should sort by date
test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined, 
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);  //Showing most recent first
});

//Should sort by amount
test('shoult sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined, 
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1], expenses[0] ]);  // Highest amount will display first
});