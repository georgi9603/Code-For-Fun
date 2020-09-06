import React, { useEffect } from 'react';
import Header from './Components/Header';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Register from './Pages/Register.js';
import OrderCheckout from './Pages/OrderCheckout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './Components/StateProvider';
import { auth } from './firebase';
import { actionTypes } from './StateManager/actions/actionTypes';
import './App.css';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: actionTypes.SET_USER,
          user
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    }
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/ordercheckout">
            <OrderCheckout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
