import React from 'react';
import PropTypes from 'prop-types';

const DescriptionItem = ({oSelectedItem}) => {
  return (
    <div className="Description-items-name">
          <img src={oSelectedItem?.image} className="image-item" alt="item" />
          <div className="Items-name">
            <h3>{oSelectedItem?.name}</h3>
            <h4>{oSelectedItem?.species}</h4>
            <audio controls src={oSelectedItem?.audio}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
        
        <div className="image-description">
          <p>{oSelectedItem?.description}</p>
          </div>
    </div>
     
  );
};

DescriptionItem.propTypes = {
    oSelectedItem: PropTypes.object.isRequired,
};

export default DescriptionItem;