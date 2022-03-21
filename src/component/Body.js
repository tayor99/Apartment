import React from 'react';
import Header from './Header';
import Content from './Content';
import '../Styles/body.css';

const Body = () => {
  return (
    <div className="body-container">
      <div className="body-content">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default Body;
