import moment from 'moment';

// Baseline test data, aka 'dummy' data
const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Coke',
    note: '',
    amount: 250,
    createdAt: moment(0).subtract(4, 'days').valueOf()  // 4 days before moment 0
}, {
    id: '3',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).add(4, 'days').valueOf() // 4 days after moment 0
}]

export default expenses;