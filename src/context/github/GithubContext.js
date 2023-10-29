import { createContext, useReducer, useState } from 'react';

const GithubContext = createContext();

// need the token and url
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// we want the children
export const GithubProvider = ({ children }) => {
  const [users, setUserJson] = useState('');
  const [loading, setLoading] = useState(true);

  //   hence we use async await we build function out the use effect
  const fetchUsers = async () => {
    // setLoading(true)
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }); // end of response

    const data = await response.json();

    setUserJson(data);

    setLoading(false);
    console.log(users);
  };

  //   this the standerd tempalte using githubContext.Provider
  // 1 we pass the children
  // 2 we pass the varibales and states we want To use in the value
  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
