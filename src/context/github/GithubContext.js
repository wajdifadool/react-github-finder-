/*
  context function calls the reducer functions ()
  GitHUbContext calls GitHubProvider
*/
import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';
const GithubContext = createContext();
// need the token and url
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// we want the children
export const GithubProvider = ({ children }) => {
  // replaced with Reducer
  //   const [users, setUserJson] = useState('');
  //   const [loading, setLoading] = useState(true);

  // this is for the reducer
  const initialState = {
    users: [],
    loading: false,
  };

  /*
  And just to kind of give you a couple of hints, what you basically want to do is have a function in
  your context that dispatches an action to your reducer that just clears the users out of the state.
  Because remember, in our state we have users, which is an array.
  When we make a search, that array is full, but we want to dispatch an action that sets it back to
  an empty array.
  Then you want to bring that function into your component, into the user search component from the context
  and you want to call it when you click and fire that off.
  */
  const clearUsers = () => {
    console.log('Clear users called');
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  //   destructring from an aray
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading(); // setLoading to true

    const params = new URLSearchParams({
      q: text,
    });
    // setLoading(true)
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }); // end of response

    // destructure the response
    const { items } = await response.json();

    // setUserJson(data);
    // setLoading(false);

    // ok we get the data . dispatch whom ever listening
    dispatch({
      type: 'GET_USERS', // the case that will ba invoked
      payload: items, // passing data  key:value
    });
    // console.log(data);
  };

  //   for testing purpuses
  //   hence we use async await we build function out the use effect
  const fetchUsers = async () => {
    setLoading(); // setLoading to true
    // console.log('FEtch');
    // setLoading(true)
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }); // end of response

    const data = await response.json();

    // setUserJson(data);
    // setLoading(false);

    // ok we get the data . dispatch whom ever listening
    dispatch({
      type: 'GET_USERS', // the case that will ba invoked
      payload: data, // passing data  key:value
    });
    // console.log(data);
  };

  // fuction letiral
  // set Loading to true
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  //   this the standerd tempalte using githubContext.Provider
  // 1 we pass the children
  // 2 we pass the varibales and states we want To use in the value
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
