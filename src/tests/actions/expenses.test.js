import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense, 
    addExpense, 
    editExpense,
    startEditExpense, 
    removeExpense,
    startRemoveExpense, 
    setExpenses, 
    startSetExpenses, 
 } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

// Dummy firebase data
beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id]= { description, note, amount, createdAt }
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

// Testing removeExpense
// Need to use 'toEqual' when comparing objects or arrays
test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({ 
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

// Testing that startRemoveExpense will remove expense from Firebase
test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });    
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

// testing startEditExpense
test('should edit expense in firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    const updates = { note: 'this is my update' };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val().note).toEqual(updates.note);
        done();
    });
});

// Testing addExpense (provided values)
test('should set up edit expense action object', () => {
    const action = addExpense(expenses[1]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    });
});

// Add expense to database and store (startAddExpense)
test('should add expense to database and store', (done) => { 
    const store = createMockStore(defaultAuthState);
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

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');        
    }).then((snapshot) => {
        const value = snapshot.val();
        expect(value).toEqual(expenseData);
        done(); // 'done' needs to be called as argument and callback so jest will recognize this is async
    })
});

// Add expense default data to database and store
test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
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

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');        
    }).then((snapshot) => {
        const value = snapshot.val();
        expect(value).toEqual(expenseDefaults);
        done(); // 'done' needs to be called as argument and callback so jest will recognize this is async
    })
});

// Test to setup setExpense action object with data
test('should set up set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

// Test that startSetExpenses will fetch the expenses from firebase
test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});