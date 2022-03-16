import React from 'react';
import '../Styles/header.css';

const Header = () => {
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for company, provider, user"
          className="text-input"
        />
      </div>
      <div className="listings">
        <h2>Listings</h2>
        <ul>
          <li>Active</li>
          <li>Inactive</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
