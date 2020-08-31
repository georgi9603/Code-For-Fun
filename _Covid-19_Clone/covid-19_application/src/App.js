import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@material-ui/core';
import { sortCountriesByCasesDesc, transformChartData } from './Utils/utils';
import AppLeft from './components/AppLeft';
import Table from './components/Table';
import LineGraph from './components/LineGraph';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [last120DaysData, setLast120DaysData] = useState([]);
  const [dataType, setDataType] = useState('cases');

  useEffect(() => {
    const getInitialWorldWideInfo = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then(response => response.json())
        .then(data => {
          setCountries(data)
        })
    }
    getInitialWorldWideInfo();
  }, []);


  useEffect(() => {
    const getLast120DaysData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then(response => response.json())
        .then(data => {
          const transformedData = transformChartData(data, dataType)
          setLast120DaysData(transformedData)
        })
    }
    getLast120DaysData();
  }, [dataType]);

  return (
    <div className="app">
      <AppLeft
        className="app__left"
        onClick={e => setDataType(e)}
        dataType={dataType}
        countries={countries}
      />
      <Card className="app__right">
        <CardContent>
          <Table countries={sortCountriesByCasesDesc(countries)} />
          <LineGraph dataType={dataType} last120DaysData={last120DaysData} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
