import { createStore } from "redux";

//Action generators - functions that return action objects
//argument passed in here is an example of object destructuring
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({ count }) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET"
})

// Setting state to a default value
//This function is called a reducer
//REDUCERS
//1. Reducers are PURE functions (input/out are all inside reducer scope--no outside variables or data)
//2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + action.incrementBy
        };
      case "DECREMENT":
        return {
          count: state.count - action.decrementBy
        };
      case "SET":
        return {
          count: action.count
        };
      case "RESET":
        return {
          count: 0
        };
      default:
        return state;
    };
};

const store = createStore(countReducer);

// Watch for changes to the redux store state
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions -- object that gets sent to the store
// e.g. increment the count
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();
store.dispatch(incrementCount());

// store.dispatch({
//   type: "INCREMENT"
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({
  decrementBy: 10
}));

store.dispatch(setCount({ count: 15 }));

store.dispatch(setCount({ count: 38 }));

store.dispatch(resetCount());
