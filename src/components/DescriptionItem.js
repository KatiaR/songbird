import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';

const DescriptionItem = ({ oSelectedItem }) => {
  return (
    <>
      <div className="Description-items-name">
        <img src={oSelectedItem?.image} className="image-item" alt="item" />
        <div className="Items-name">
          <h3>{oSelectedItem?.name}</h3>
          <h4>{oSelectedItem?.species}</h4>
          <AudioPlayer
            src={oSelectedItem?.audio}
            showJumpControls={false}
            customAdditionalControls={[]}
            autoPlayAfterSrcChange={false}
          />
        </div>
      </div>
      <div className="image-description">
        <p>{oSelectedItem?.description}</p>
      </div>
    </>
  );
};

DescriptionItem.propTypes = {
  oSelectedItem: PropTypes.object.isRequired,
};

export default DescriptionItem;
