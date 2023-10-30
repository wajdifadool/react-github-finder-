const GithubReducer = (state, action) => {
  switch (action.type) {
    // dispatch an action
    case 'GET_USERS':
      console.log('REducer');
      return {
        ...state, // the current state preserved and we add to it what ever follows
        users: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state, // the current state preserved and we add to it what ever follows
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state, // the current state preserved and we add to it what ever follows
        users: [],
      };

    default:
      return state;
  }
};

export default GithubReducer;
