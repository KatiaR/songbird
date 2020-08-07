import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({navigationList, indicatorPage}) => {
  return (
    <nav className="Nav-content">
      <ul className="Nav-list">
        {navigationList.map((item, i) => {
          return (
            <li key={item} className={`${indicatorPage === i ? 'pointer-page' : ''}`}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  navigationList: PropTypes.array,
};

export default Navigation;