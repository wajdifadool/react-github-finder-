const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
export const searchUsers = async (text) => {
  // setLoading(); // setLoading to true
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
  // dispatch({
  //   type: 'GET_USERS', // the case that will ba invoked
  //   payload: items, // passing data  key:value
  // });

  return items;
};

export const getUserRepos = async (login) => {
  // setLoading(); // setLoading to true

  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  }); // end of response

  // destructure the response
  const data = await response.json();
  return data;
  // ok we get the data . dispatch whom ever listening
  // dispatch({
  //   type: 'GET_REPOS', // the case that will ba invoked
  //   payload: data, // passing data  key:value
  // });
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
