import React, { useState, useEffect } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Preview from './Preview';
import Description from './Description';
import Button from './Button';
import '../styles/App.scss';
import navigationList from '../assets/list';
import birdsData from '../assets/birds';
import PropTypes from 'prop-types';
import questionImg from '../images/qw.jpg';
import randomInteger from '../util';

function App() {
  const iRandomPreviewItem = randomInteger(0, 5);

  const [selectedItemId, setSelectedId] = useState(null);
  let [iCount, setCount] = useState(0);
  const [randomItemId, setRandomItemId] = useState(
    birdsData[iCount][iRandomPreviewItem].id
  );
  const [bChange, setBchange] = useState(false);
  const [rightId, setRightId] = useState(null);

  const randomPreviewData = {
    image: questionImg,
    name: '****',
    audio: birdsData[iCount][iRandomPreviewItem].audio,
  };

  const selectedData = birdsData[iCount].find(
    (elem) => elem.id === selectedItemId
  );

  let rigtAnswerData = bChange ? selectedData : randomPreviewData;
  if (rightId) {
    rigtAnswerData = birdsData[iCount].find((elem) => elem.id === rightId);
  }

  function onSelectedItem(id) {
    setSelectedId(id);
    if (id && id === randomItemId && !bChange) {
      setBchange(true);
      setRightId(id);
    }
  }

  function onCountClick() {
    iCount < birdsData.length - 1 && setCount(++iCount);
    setSelectedId(null);
    setRandomItemId(iRandomPreviewItem);
    setRightId(null);
    setBchange(false);
  }

  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Navigation navigationList={navigationList} indicatorPage={iCount} />
        <main className="Main-content">
          <Preview previewData={rigtAnswerData} />
          <Description
            birdsData={birdsData[iCount]}
            onClick={onSelectedItem}
            selectedItemId={selectedItemId}
          />
        </main>
        <footer>
          <Button onClick={onCountClick} disabled={!rightId} />
        </footer>
      </div>
    </div>
  );
}

App.propTypes = {
  birdsData: PropTypes.array,
  onSelectedItem: PropTypes.func,
};

export default App;
