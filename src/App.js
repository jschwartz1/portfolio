import React, { Component } from 'react'

import Navigaton from './components/Navigation/Navigation.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import WorkPage from './components/WorkPage/WorkPage.js';
import ContactPage from './components/ContactPage/ContactPage.js';
import Footer from './components/Footer/Footer.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Switch,
} from "react-router-dom";
import './App.css';



class App extends Component {

  render() {
    return (
      <Router>
        <Navigaton></Navigaton>
        <Routes>
          <Route exact path='/portfolio' element={<LandingPage/>}></Route>
          <Route path='/work' element={<WorkPage/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
  );
  }
}

export default App;
