import React, { useEffect } from 'react';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login';
import Register from './Pages/Register.js';
import OrderCheckout from './Pages/OrderCheckout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth, database } from './firebase';
import { actionTypes } from './StateManager/actions/actionTypes';
import { useDispatch } from 'react-redux';
import { getInitialProducts } from './StateManager/features/productsSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

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

  useEffect(() => {
    const getData = () => {
      database
        .collection("products")
        .onSnapshot(snapshot => dispatch(
          getInitialProducts(snapshot.docs.map(doc => doc.data()))
        ))
    }

    getData();
  }, [dispatch])

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
