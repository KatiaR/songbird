import React from 'react';
import bird from '../images/bird.jpg';

const Description = ({}) => {
  return (
    <section className="Main-content-description">
      <div className="Description-nav">
        <ul className="Description-nav-list">
          <li>
            <a href="#">Разминка</a>
          </li>
          <li>
            <a href="#">Воробьиные</a>
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
      </div>

      <div className="Description-items">
        <div className="Description-items-name">
          <img src={bird} className="image-item" alt="image-item" />
          <div className="Items-name">
            <h3>Грач</h3>
            <h4>Corvus frugilegus</h4>
            <audio
              controls
              src="https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
        </div>
        <div className="image-description">
          <p>
            Грачи очень умные и сообразительные птицы. С помощью клюва они
            создают и используют простейшие орудия. У грачей развит рефлекс на
            звуки трактора. Услышав «тарахтение», они летят на звук – трактор
            пашет землю, значит, в этом месте много корма.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
