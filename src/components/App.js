import React, {useState} from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Preview from './Preview';
import Description from './Description';
import Button from './Button';
import '../styles/App.scss';
import navigationList from '../assets/list';
import birdsData from '../assets/birds';
import PropTypes from 'prop-types';

function App() {
  const [aBirdsData, setData] = useState(birdsData);
  const [selectedItemId, setSelectedId] = useState(Date.now());
  let [iCount, setCount] = useState(0);
  
  function onSelectedItem(id) {
    setSelectedId(id);
  }

  function onCountClick() {
    iCount < aBirdsData.length -1 && setCount(++iCount);
    setSelectedId(null);
  }

  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Navigation navigationList={navigationList}  indicatorPage={iCount}/>
        <main className="Main-content">
          <Preview />
          <Description
            birdsData={aBirdsData[iCount]}
            onClick={onSelectedItem}
            selectedItemId={selectedItemId}
          />
        </main>
        <footer>
          <Button onClick={onCountClick} />
        </footer>
      </div>
    </div>
  );
}

App.propTypes = {
  aBirdsData: PropTypes.array,
  onSelectedItem: PropTypes.func,
};

export default App;
