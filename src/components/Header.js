import React from 'react';
import logo from '../assets/images/logo.png';

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">
          <img src={logo} alt="logo" height="40" width="150" />
        </div>
      </div>
    </nav>
  );
};
