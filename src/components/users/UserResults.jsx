import { useEffect, useState } from 'react';
import React from 'react';
import UserItem from './UserItem';
import Spinner from '../shared/Spinner';
function UserResults() {
  const [users, setUserJson] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUsers();
  }, []);

  //   hence we use async await we build function out the use effect
  const fetchUsers = async () => {
    // setLoading(true)
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }); // end of response

    const data = await response.json();

    setUserJson(data);

    setLoading(false);
    console.log(users);
  };

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
