import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
test('should set up edit expense action object', () => {
    const action = addExpense(expenses[1]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    });
});

test('should add expense to database and store', (done) => { 
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'this one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions(); // Will return an array of our actions, e.g. actions[0], etc.
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');        
    }).then((snapshot) => {
        const value = snapshot.val();
        expect(value).toEqual(expenseData);
        done(); // 'done' needs to be called as argument and callback so jest will recognize this is async
    })
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions(); // Will return an array of our actions, e.g. actions[0], etc.
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');        
    }).then((snapshot) => {
        const value = snapshot.val();
        expect(value).toEqual(expenseDefaults);
        done(); // 'done' needs to be called as argument and callback so jest will recognize this is async
    })
});

// Testing addExpense (default values)
// test('should set up add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: "",
//             note: "",
//             amount: 0,
//             createdAt: 0
//         }        
//     })
// });