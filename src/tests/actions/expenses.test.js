import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// Testing removeExpense
// Need to use 'toEqual' when comparing objects or arrays
test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({ 
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

// Testing editExpense
test('should set up edit expense action object', () => {
    const action = editExpense('222', { note: 'this is a test' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '222',
        updates: {
            note: 'this is a test'
        }
    })
});

// Testing addExpense (provided values)
test('should set up add expense action object with provided values', () => {
    const expenseData = { 
        description: 'Dinner',
        note:'With friends',
        amount: 2000,
        createdAt: 150
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

// Testing addExpense (default values)
test('should set up add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }        
    })
});