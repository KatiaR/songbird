import React from 'react';
import PropTypes from 'prop-types';
import DescriptionItem from './DescriptionItem';
import EmptyDescription from './EmtyDescription';

const Description = ({ birdsData, onClick, selectedItemId }) => {
  const [oSelectedItem] = selectedItemId
    ? birdsData.filter((elem) => {
        return elem.id === selectedItemId;
      })
    : [];
  return (
    <section className="Main-content-description">
      <div className="Description-nav">
        <ul className="Description-nav-list">
          {birdsData.map((item) => {
            return (
              <li key={item.id} onClick={() => onClick(item.id)}>
                <a href="!#">{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="Description-items">
        {oSelectedItem ? (
          <DescriptionItem oSelectedItem={oSelectedItem} />
        ) : (
          <EmptyDescription />
        )}
      </div>
    </section>
  );
};

Description.propTypes = {
  onClick: PropTypes.func,
  selectedItemId: PropTypes.number,
  birdsData: PropTypes.array,
};

export default Description;
