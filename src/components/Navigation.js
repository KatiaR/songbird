import React from 'react';

const Navigation = ({}) => {
  return (
    <nav className="Nav-content">
      <ul className="Nav-list">
        <li className="pointer-page">
          <a href="#">Разминка</a>
        </li>
        <li>
          <a href="#">Вообьиные</a>
        </li>
        <li>
          <a href="#">Лесные птицы</a>
        </li>
        <li>
          <a href="#">Певчие птицы</a>
        </li>
        <li>
          <a href="#">Хищные птицы</a>
        </li>
        <li>
          <a href="#">Морские птицы</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
