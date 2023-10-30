import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (text) => {
  // setLoading(); // setLoading to true
  const params = new URLSearchParams({
    q: text,
  });
  const res = await github.get(`/search/users?${params}`);
  return res.data.items;
};

export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  // ?${params}
  // 2 request using promisa all
  const [user, repos] = await Promise.all([
    //
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return {
    user: user.data,
    repos: repos.data,
  };
};

export const getUser = async (login) => {
  // setLoading(); // setLoading to true
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  }); // end of response

  if (response.status === 404) {
    // redirect
    window.location = '/notfound';
  } else {
    const m_user = await response.json();

    return m_user;
    // // ok we get the data . dispatch whom ever listening
    // dispatch({
    //   type: 'GET_USER',
    //   payload: m_user, // passing data  key:value
    // });

    // console.log(m_user);
  }
  return null;
};
