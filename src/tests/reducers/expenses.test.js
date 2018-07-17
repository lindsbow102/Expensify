import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// Test that default state is set to empty array
test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' }); // Use '@@INIT' when testing for default value
    expect(state).toEqual([]);
});

// Test to removeExpense by id
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

// Test if removeExpense does NOT work based on id not found
test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: !expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses); // expenses array will remain unchanged
});

// Test addExpense
test('should add an expense', () => {
    const newExpense = {
        id: '4',
        description: 'Insurance',
        note: '',
        amount: 40000,
        createdAt: moment().add(6, 'days').valueOf() // 6 days after current point in time
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, newExpense ]);
});

// Test editExpense
test('should edit an expense', () => {
    const note = 'new note';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].note).toBe(note);
});

// Test if expense not found, editExpense will not run
test('should not edit expense if expense id not found', () => {
    const note = 'new note'; 
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',  // id doesn't match, ergo expense not found and array will remain unchanged
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

// Testing if setExpenses works
test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});