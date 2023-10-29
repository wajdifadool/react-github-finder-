import { useContext } from 'react';
import React from 'react';
import UserItem from './UserItem';
import Spinner from '../shared/Spinner';

import GithubContext from '../../context/github/GithubContext';
function UserResults() {
  // we can grap any vlaue form the GitHubContext.jsx
  const { users, loading } = useContext(GithubContext);

  // useEffect(() => {
  //   console.log('LIST');
  //   fetchUsers();
  // }, []);

  if (!loading) {
    return (
      // xl: grid-col-4 meaning in large screen we have agrid 0f 4 cols
      // xl: <class> is bassicly media query
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {/* Create the List here */}
        {users.map((user, key) => {
          return (
            <>
              <UserItem key={user.id} user={user} />
            </>
          );
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
