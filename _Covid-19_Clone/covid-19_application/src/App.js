import React from 'react';
import './App.css';
import AppLeft from './components/AppLeft'

import { Card, CardContent } from '@material-ui/core';

function App() {
  return (
    <div className="app">
      <AppLeft className="app__left" />
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
