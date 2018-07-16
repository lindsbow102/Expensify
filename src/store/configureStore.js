import { combineReducers, createStore, applyMiddleware, compose } from 'redux'; // Thunk allows redux to dispatch functions
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

// If we are using DEVTOOLS, we want to make sure it is correctly set up.. if not, property doesn't exist
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store Creation

export default () => {
    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
      );
      return store;
};

