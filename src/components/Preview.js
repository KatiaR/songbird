import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

const Preview = ({ previewData }) => {
  return (
    <section className="Main-content-preview">
      <img
        src={previewData.image}
        className="Main-content-image"
        alt="image_bird"
      />
      <div className="Main-content-audio">
        <span>{previewData.name}</span>
        <div className="Main-content-audio-wrapper">
          <AudioPlayer
            src={previewData.audio}
            showJumpControls={false}
            customAdditionalControls={[]}
            autoPlayAfterSrcChange={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Preview;
