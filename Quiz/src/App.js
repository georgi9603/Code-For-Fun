import React from 'react';
import './App.css';
import Quiz from './components/Organisms/Quiz';
import Congratulations from './components/Organisms/Congratulations';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/congratulations">
            <Congratulations />
          </Route>
          <Route path="/">
            <Quiz />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
