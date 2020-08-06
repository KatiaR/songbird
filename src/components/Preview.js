import React from 'react';
import bird from '../images/bird.jpg';

const Preview = ({}) => {
  return (
    <section className="Main-content-preview">
      <img src={bird} className="Main-content-image" alt="image_bird" />
      <div className="Main-content-audio">
        <span>****</span>
        <div className="Main-content-audio-wrapper">
          <audio
            controls
            src="https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3"
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
      </div>
    </section>
  );
};

export default Preview;
