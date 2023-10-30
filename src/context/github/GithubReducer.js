const GithubReducer = (state, action) => {
  switch (action.type) {
    // dispatch an action
    case 'GET_USERS':
      return {
        ...state, // the current state preserved and we add to it what ever follows
        users: action.payload,
        loading: false,
      };
    // get user in User.jsx
    case 'GET_USER':
      return {
        ...state, // the current state preserved and we add to it what ever follows
        user: action.payload,
        loading: false,
      };
    // called from User.jsx
    case 'GET_REPOS':
      return {
        ...state, // the current state preserved and we add to it what ever follows
        repos: action.payload,
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
