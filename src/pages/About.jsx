import React from 'react';

function About() {
  return (
    <>
      <h1 className="text-4xl mb-4">About the Project</h1>
      <h1 className="text-xl mb-4">Github Finder</h1>
      <p className="text-2xl">
        A React app to search GitHub profiles and see profile details.
      </p>

      <p className="mb-4 text-2xl">
        This project is part of the
        <a
          href="https://www.udemy.com/course/modern-react-front-to-back/"
          className="bg-amber-300 text-black rounded">
          {' '}
          React Fron to Back on Udemy by Brad Traversy.
        </a>
      </p>
      {/* Version */}
      <p className="text-lg text-gray-400">
        Version: <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400 mb-10">
        Mady By: <span className="text-white">Wajde Fadool</span>
      </p>
      <p>@todo - add the Tech used in the follwoing project </p>
    </>
  );
}

export default About;
