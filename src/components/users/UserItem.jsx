import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-20 h-20">
              <img src={avatar_url} alt="avatar profile" />
            </div>
          </div>
        </div>
        {/* Div 2  */}
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`{/users/${login}}`}></Link>
        </div>
      </div>
    </div>
  );
}
// }

// UserItem.propTypes = {
//   user: PropTypes.object.isRequired,
// };
export default UserItem;
