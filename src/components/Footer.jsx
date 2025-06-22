import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer className="bg-gray-900 py-6 text-center text-gray-500 text-sm">
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
