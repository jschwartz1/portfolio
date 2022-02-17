import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// Small assets
import profileImage from '../../assets/profile.jpg'
import landingGrid from '../../assets/landing_grid.png'
import emailIcon from '../../assets/email_icon.png'
import arrowIcon from '../../assets/arrow_icon.png'

// Card thumbnails
import constructionDetailsThumbnail from '../../assets/main_card_construction_details.jpg'
import threeDeeModelingCardThumbnail from '../../assets/main_card_3D_modeling.jpg'
import allProjectsThumbnail from '../../assets/main_card_all_projects.jpg'
import renderingAndVizThumbnail from '../../assets/main_card_rendering_and_viz.jpg'

// Hero images
import visualExplorationOne from '../../assets/visual_explorations_1.jpg'
import visualExplorationTwo from '../../assets/visual_explorations_2.jpg'

// Aos import
import './LandingPage.css'
import 'aos/dist/aos.css'
import Aos from 'aos';

const LandingPage = () => {

    useEffect(() => {
        Aos.init( {duration: 1500} )
      }, [])    

    return (
        <div className="master">
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet"></link>
            <div className="heroWrapper">
                <div className="heroTextWrapper">
                    <div className="heroTextMain">
                        Hi, I'm Joshua Schwartz. Landscape Architect Student at the University of Georgia
                    </div>
                    <div className="heroSubText">
                        Designing sustainable and user-centric programs to create natural interactive spaces.
                    </div>
                    <div className="emailButton">
                        <img className="iconWrapper" src={emailIcon}></img>
                        jschwartz2000@gmail.com
                    </div>
                    <div data-aos='fade-up' className="featuredWork">
                        Featured Work
                        <img className="arrowIconWrapper" src={arrowIcon}></img>
                    </div>
                </div>  
                <div className="heroImage">
                    <img className="profileWrapper" src={profileImage}></img>
                </div>
            </div>
            <img className="landingGridWrapper" src={landingGrid}></img>
            <div className="cards" data-aos='fade-up'>
                <div className="thumbnailCol1">
                    <NavLink to='/work'>
                        <img className="thumbnailWrapper" src={constructionDetailsThumbnail}></img>
                    </NavLink>
                    <NavLink to='/work'>
                        <img className="thumbnailWrapper" src={allProjectsThumbnail}></img>
                    </NavLink>
                </div>
                <div className="thumbnailCol2">
                    <NavLink to='/work'>
                        <img className="thumbnailWrapper" src={renderingAndVizThumbnail}></img>
                    </NavLink>
                    <NavLink to='/work'>
                        <img className="thumbnailWrapper" src={threeDeeModelingCardThumbnail}></img>
                    </NavLink>
                </div>
            </div>
            <img className="landingGridWrapper" src={landingGrid}></img>
            <div className="visualExplorations">
                <h1>Visual Explorations</h1>
                <img className="visualHeroWrapper" src={visualExplorationOne}></img>
                <img className="visualHeroWrapper" src={visualExplorationTwo}></img>
            </div>
        </div>
    )

}

export default LandingPage;