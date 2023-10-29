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

  //   destructring from an aray
  const [state, dispatch] = useReducer(GithubReducer, initialState);

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
        fetchUsers,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
