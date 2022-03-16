import React from 'react';
import Header from './Header';
import Content from './Content';
import SideModal from './SideMdal';
import '../Styles/body.css';

const Body = () => {
  return (
    <div className="body-container">
      <div className="body-content">
        <Header />
        <Content />
        {/* <SideModal /> */}
      </div>
    </div>
  );
};

export default Body;
