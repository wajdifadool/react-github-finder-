import React from 'react';
import UserResults from '../components/users/UserResults';

function Home() {
  return (
    <div>
      {/* Creating UserList  */}
      <h1 className="text-6xl">Welcom to my page</h1>
      {/* <p>{process.env.REACT_APP_GITHUB_TOKEN}</p> */}
      {/* @todo- Search Component Goes here  */}
      SEARCH
      <UserResults />
    </div>
  );
}

export default Home;
