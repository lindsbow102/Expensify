import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// Test for default filter values
test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' }); // @@INIT is found in redux dev tools
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),  // Start of Month from current point in time
        endDate: moment().endOf('month')
    });
});

// Test that action will switch to sortByAmount
test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

// Test that action will switch to sortByDate
test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'  // Starting with amount so we can watch if it actually changes
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

// Test that action will set text filter
test('should set text filter', () => {    
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'this is a test' });
    expect(state.text).toBe('this is a test');
});

// Test that action will set startDate filter
test('should set startDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment() });
    expect(state.startDate).toEqual(moment());
});

// Test that action will set endDate filter
test('should set endDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment() });
    expect(state.endDate).toEqual(moment());
})