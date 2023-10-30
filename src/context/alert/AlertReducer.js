const AlertReducer = (state, action) => {
  switch (action.type) {
    // dispatch an action
    case 'SET_ALERT':
      return action.payload;
    case 'REMOVE_ALERT':
      return null;
    default:
      return state;
  }
};

export default AlertReducer;
