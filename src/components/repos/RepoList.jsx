import React from 'react';
import RepoItem from './RepoItem';

function RepoList({ repos }) {
  // Show the rpeos here
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      {/* Card Body */}
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bald card-title">
          Latest Repositorires
        </h2>

        {/* Show Repo List  */}

        {repos.map((repo, key) => {
          return (
            <>
              <RepoItem key={repo.id} repo={repo} />
              {/* <UserItem key={user.id} user={user} /> */}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default RepoList;
