import React, { Component } from 'react'

import Navigaton from './components/Navigation/Navigation.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import ConstructionDetailsProject from './components/ProjectPages/ConstructionDetailsPage/ConstructionDetailsProject.js';
import RenderingAndVizProject from './components/ProjectPages/RenderingAndVizPage/RenderingAndVizProject.js'
import ThreeDeeModelingProject from './components/ProjectPages/ThreeDeeModelingPage/ThreeDeeModelingProject.js';
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
          <Route path='/work' element={<LandingPage/>}></Route>
          <Route path='/work/construction_details' element={<ConstructionDetailsProject/>}></Route>
          <Route path='/work/rendering_and_viz' element={<RenderingAndVizProject/>}></Route>
          <Route path='/work/3D_modeling' element={<ThreeDeeModelingProject/>}></Route>
          <Route path='/contact' element={<LandingPage/>}></Route>
        </Routes>
      </Router>
  );
  }
}

export default App;
