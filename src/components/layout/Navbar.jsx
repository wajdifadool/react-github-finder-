import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { PropTypes } from 'prop-types';

function Navbar({ title }) {
  return (
    <nav
      // Check The daisy UI clasess
      className="navbar mb-12 shadow-lg bg-neutral text-white	 text-neutral-content">
      <div className="flex container mx-auto">
        <div className="felx-none px-2 mx-2">
          {/* make the icon inline beacuse we want text next to it  */}
          {/* p */}
          <FaGithub className="inline pr-2 text-3xl" />
          {/* link the github title to home page     */}
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm">
              Home
            </Link>

            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              about
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.defaultProps = {
  title: 'Github finder ',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
