import React from 'react';
import './App.css';
import Row from "./components/Row";
import Nav from './components/Nav';
import Banner from './components/Banner';
import movieGenres from './data/data';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      { movieGenres
        ?.map(movie => {
          return <Row
            title={movie.genre}
            fetchURL={movie.fetchUrl}
            isNetflixOriginals={movie?.isNetflixOriginals} />
        })
      }
    </div>
  );
}

export default App;
