import React from 'react';
import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // .. make some validation

    if (text === '') {
      alert('search first Please');
    } else {
      // @todo = serach users goes here
      searchUsers(text);
      // clear User Input
      setText('');
    }
    // setText(e.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    clearUsers();
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
