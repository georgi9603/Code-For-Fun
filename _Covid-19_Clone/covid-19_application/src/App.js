import React from 'react';
import './App.css';
import Header from './components/Header';
import InfoBox from './components/InfoBox';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__info">
        <InfoBox title="Coronavirus" cases="330" total="10 000" />
        <InfoBox title="Recovered" cases="330" total="8 000" />
        <InfoBox title="Deaths" cases="3" total="500" />
      </div>
    </div>
  );
}

export default App;
