import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Preview from './Preview';
import Description from './Description';
import Button from './Button';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Navigation />
        <main className="Main-content">
          <Preview />
          <Description />
        </main>
        <footer>
          <Button />
        </footer>
      </div>
    </div>
  );
};

export default App;
