import React from 'react';
import logo from './images/logo.svg';
import bird from './images/bird.jpg';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <header className="App-header">
          <div className="logo"></div>
          <div>Score: 5</div>
        </header>
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
        <main className="Main-content">
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
                  создают и используют простейшие орудия. У грачей развит
                  рефлекс на звуки трактора. Услышав «тарахтение», они летят на
                  звук – трактор пашет землю, значит, в этом месте много корма.
				  
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <button className="btn-next"> NEXT </button>
        </footer>
      </div>
    </div>
  );
}

export default App;
