import React, { useState, useEffect } from 'react';
import './App.css';
import AppLeft from './components/AppLeft';
import Table from './components/Table';
import { Card, CardContent } from '@material-ui/core';
import { sortCountriesByCasesDesc, sortCountriesByNewCasesDesc } from './Utils/utils'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getInitialWorldWideInfo = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then(response => response.json())
        .then(data => {
          setCountries(data)
        })
    }
    getInitialWorldWideInfo();
  }, [])

  return (
    <div className="app">
      <AppLeft className="app__left" />
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={sortCountriesByCasesDesc(countries)} />
          <h3>Worldwide new cases</h3>
          <Table newCases countries={sortCountriesByNewCasesDesc(countries)} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
