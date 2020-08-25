import React from 'react';
import './App.css';
import Row from "./components/Row";
import requests from './requests/requests';
import Header from './components/Header';
import Banner from './components/Banner';
function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Banner />
      <Row title={"Netflix Originals"} fetchURL={requests.fetchNetflixOriginals} isNetflixOriginals />
      <Row title={"Trending Now"} fetchURL={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchURL={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchURL={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchURL={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchURL={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchURL={requests.fetchDocumentartyMovies} />
    </div>
  );
}

export default App;
