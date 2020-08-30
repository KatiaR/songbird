import React from 'react';


const Header = ({score}) => {
  return (
    <header className="App-header">
      <div className="logo"></div>
      <div>Score: {score}</div>
    </header>
  );
};

export default Header;
