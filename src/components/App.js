import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Preview from './Preview';
import Description from './Description';
import Button from './Button';
import Modal from './Modal';
import '../styles/App.scss';
import navigationList from '../assets/list';
import birdsData from '../assets/birds';
import PropTypes from 'prop-types';
import questionImg from '../images/qw.jpg';
import randomInteger from '../util';

function App() {
  const iRandomPreviewItem = randomInteger(1, 5);
  const maxScoreByRound = 6;

  const [selectedItemId, setSelectedId] = useState(null);
  let [iCount, setCount] = useState(0);
  const [randomItemId, setRandomItemId] = useState(
    birdsData[iCount][iRandomPreviewItem].id
  );
  const [showRightData, setShowRightData] = useState(false);
  const [rightId, setRightId] = useState(null);

  const [score, setScore] = useState(0);
  let [scoreByRound, setScoreByRound] = useState(6);
  let [numberListItemPress, setNumberListItemPress] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  console.log(randomItemId);

  const randomPreviewData = {
    image: questionImg,
    name: '****',
    audio: birdsData[iCount][iRandomPreviewItem].audio,
  };

  const selectedData = birdsData[iCount].find(
    (elem) => elem.id === selectedItemId
  );

  let rigtAnswerData = showRightData ? selectedData : randomPreviewData;
  if (rightId) {
    rigtAnswerData = birdsData[iCount].find((elem) => elem.id === rightId);
  }

  const modalData = {
    score: score,
    img: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
    maxScore: 36,
  };

  function onSelectedItem(id) {
    setSelectedId(id);
    checkScore();
    if (id && id === randomItemId && !showRightData) {
      setShowRightData(true);
      setRightId(id);
    }
  }

  function onCountClick() {
    iCount < birdsData.length - 1 && setCount(++iCount);
    setSelectedId(null);
    setRandomItemId(iRandomPreviewItem);
    setRightId(null);
    setShowRightData(false);
    udateScore();
  }

  function onStartNewGame() {
    setModalVisible(!modalVisible);
    setScore(0);
    setCount(0);
  }

  function checkScore() {
    if (!showRightData) {
      setNumberListItemPress(++numberListItemPress);
    }
    setScoreByRound(maxScoreByRound - numberListItemPress + 1);
  }

  function udateScore() {
    setNumberListItemPress(0);
    setScoreByRound(0);
    setScore(score + scoreByRound);
    if (iCount === 2) {
      setModalVisible(true);
    }
  }

  return (
    <div className="App">
      {modalVisible ? (
        <Modal finalData={modalData} onClick={onStartNewGame} />
      ) : (
        <div className={iCount > 2 ? 'App-content hidden' : 'App-content'}>
          <Header score={score} />
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
      )}
    </div>
  );
}

App.propTypes = {
  birdsData: PropTypes.array,
  onSelectedItem: PropTypes.func,
};

export default App;
