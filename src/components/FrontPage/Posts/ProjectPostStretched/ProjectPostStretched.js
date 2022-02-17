import React from 'react'
import { NavLink } from 'react-router-dom'

import './ProjectPostStretched.css'

const ProjectPostStretched = () => (
  <div className="projectPost">
    <div className="projectPostLeft">
        {/* <NavLink to='/projects/stretched'>
            <img className="projectPostThumbnail" src={stretchedThumbnail} alc="spotify-thumbnail"></img>
        </NavLink> */}
    </div>
    <div className="projectPostRight">
      <p className="projectPostHeader">Stretched: My Ecommerce Platform</p>
      <p className="projectPostSubHeader">2021</p>
    </div>
  </div>
)

export default ProjectPostStretched