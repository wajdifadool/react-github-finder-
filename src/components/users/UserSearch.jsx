import React from 'react';
import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

import { searchUsers } from '../../context/github/GithubAction';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // .. make some validation

    if (text === '') {
      setAlert('search first Please', 'error'); // from alertContext
    } else {
      dispatch({ type: 'SET_LOADING' });
      // @todo = serach users goes here
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: users });
      // clear User Input
      setText('');
    }
    // setText(e.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    // clearUsers();
    dispatch({ type: 'CLEAR_USERS' });
  };
  return (
    <div className="grid grid-cols-1 xl:gird-cols-2 lg:grid-cols-2 md:gird-cols-2 mb-8 gap-8">
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="relative">
            <input
              placeholder="Search user"
              type="text"
              value={text}
              onChange={handleTextChange}
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
            />
            {/* absloute in the realtive div  */}
            <button
              type="submit"
              className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
              Search
            </button>
          </div>
        </div>
      </form>

      {/* Button Clear, is hidden if no users 
      for this we pull out the UseContext  and destructured 
      the users and check for its length  */}
      {users.length !== 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
