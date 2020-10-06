import React, { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
} from "react-router-dom";
import './App.css';
import Booking from './component/Booking/Booking';
import Homepage from './component/HomePage/Homepage';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Hotel from './component/Hotel/Hotel';
import SignUp from './component/SignUp/SignUp';
import LogIn from './component/LogIn/LogIn';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/home">
          <Homepage></Homepage>
          </Route>
          <Route path="/booking/:id">
          <Booking></Booking>
          </Route>
          <PrivateRoute path="/startbooking">
            <Hotel></Hotel>
          </PrivateRoute>
          <Route path="/create">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/login2">
            <LogIn></LogIn>
          </Route>
          <Route path="/signup/login">
            <LogIn></LogIn>
          </Route>
            <Route exact path="/">
            <Homepage></Homepage>
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
