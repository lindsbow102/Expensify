import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';


// Testing setStartDate action object
test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

// Testing setEndDate action object
test('should generate set end date action object', () => {
    const action  = setEndDate(moment(100));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(100)
    })
});

// Testing sortByAmount action object
test('should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

//Testing sortByDate action object
test('should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

//Testing setTextFilter action object with provided text
test('should generate set text filter with provided text', () => {
    const action = setTextFilter('This is a test');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'This is a test'
    })
});

//Testing setTextFilter action object with default text
test('should generate set text filter with default text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});