import React from 'react';
import '../Styles/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faStopwatch } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar">
        <div className="list-container">
          <div className="logo">
            <p>
              <span className="company_logo">R</span>
              Rabbu
            </p>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#">Listings</a>
              </li>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Providers</a>
              </li>
              <li>
                <a href="#">Users</a>
              </li>
              <li>
                <a href="#">Billings</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
