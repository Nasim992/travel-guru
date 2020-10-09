import React, { createContext, useState } from 'react';
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
import News from './component/News/News';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
import Blog from './component/Blog/Blog';
import Destination from './component/Destination/Destination';
export const Context = createContext();
function App() {
  const [indexId, setIndexId] = useState(0);
  const [user, setUser] = useState({
    name1: '',
    name2: '',
    email: '',
    password: '',
    photo: '',
    error: '',
  }) 
  return (
    <Context.Provider value={{ idNo: [indexId, setIndexId], userElement: [user, setUser] }} >
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
          <Route path="/signup/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/news">
            <News></News>
          </Route> 
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route path = "/blog">
            <Blog></Blog>
          </Route>
            <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </Context.Provider>

  );
}

export default App;
