export default (state = {}, action) => {
  // state is an empty object when user is logged out
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.uid
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
