// React import
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// Small assets
import profileImage from '../../assets/profile.jpg'
import landingGrid from '../../assets/landing_grid.png'
import emailIcon from '../../assets/email_icon.png'
import linkedInIcon from '../../assets/linked_in_icon.png'

// Card thumbnails
import constructionDetailsThumbnail from '../../assets/main_card_construction_details.jpg'
import threeDeeModelingCardThumbnail from '../../assets/main_card_3D_modeling.jpg'
import renderingAndVizThumbnail from '../../assets/main_card_rendering_and_viz.png'

// Hero images
import mountainLodgeBirdsEye from '../../assets/mountain_lodge_birds_eye.jpg'
import mountainLodgeAurora from '../../assets/mountain_lodge_aurora.jpg'
import singleFamilyHousing from '../../assets/single_family_housing.jpg'
import mountainLodgePostProcessed from '../../assets/mountain_lodge_post_processed.jpg'

// Aos and CSS import
import './LandingPage.css'
import 'aos/dist/aos.css'
import Aos from 'aos';

const LandingPage = () => {

    useEffect(() => {
        Aos.init( {duration: 1500} )
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="master">
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet"></link>
            <div className="heroWrapper">
                <div className="heroTextWrapper">
                    <div className="heroTextMain">
                        Josh Schwartz
                    </div>
                    <div className="heroSubText">
                        Landscape Architecture Student
                    </div>
                    <div className="heroSubText">
                        University of Georgia
                    </div>
                    <div className='buttonsWrapper'>
                        <div className="emailButton" onClick={() => { navigator.clipboard.writeText('jschwartz2000@gmail.com') }}>
                            <img className="emailIconWrapper" src={emailIcon}></img>
                            jschwartz2000@gmail.com
                        </div>
                        <div className='linkButton'>
                            <a className='footerLink' target='_blank' href='https://www.linkedin.com/in/josh-s-a33198133/'>
                                <img className='littleIconWrapper' src={linkedInIcon}></img>
                            </a>
                        </div>
                    </div>
                    <div className='resumeButton'>
                        <a className='resumeLink' target='_blank' href='https://docs.google.com/document/d/1xU2LZ7W8Np-BNtWOabHhBu3DPrTj3EZh73nJ9khBCMo/edit'>
                            Resume/CV
                        </a>
                    </div>
                </div>  
                <div className="heroImage">
                    <img className="profileWrapper" src={profileImage}></img>
                </div>
            </div>
            <img className="landingGridWrapper" src={landingGrid}></img>
            <div className="cards" data-aos='fade-up'>
                <div className="thumbnailCol1">
                    <NavLink to='/work/construction_details'>
                        <img className="thumbnailWrapper" src={constructionDetailsThumbnail}></img>
                    </NavLink>
                </div>
                <div className="thumbnailCol2">
                    <NavLink to='/work/rendering_and_viz'>
                        <img className="thumbnailWrapper" src={renderingAndVizThumbnail}></img>
                    </NavLink>
                    <NavLink to='/work/3D_modeling'>
                        <img className="thumbnailWrapper" src={threeDeeModelingCardThumbnail}></img>
                    </NavLink>
                </div>
            </div>
            <img className="landingGridWrapper" src={landingGrid}></img>
            <div className="visualExplorations">
                <h1 className='headerText'>Visual Explorations</h1>
                <img className="visualHeroWrapper" src={singleFamilyHousing}></img>
                <div className='visualExplorationSubtext'>Single Family Housing</div>
                <img className="visualHeroWrapper" src={mountainLodgeBirdsEye}></img>
                <div className='visualExplorationSubtext'>Rocky Mountain Lodge Plan View</div>
                <img className="visualHeroWrapper" src={mountainLodgeAurora}></img>
                <div className='visualExplorationSubtext'>Aurora Perspective</div> 
                <img className="visualHeroWrapper" src={mountainLodgePostProcessed}></img>
                <div className='visualExplorationSubtext'>Photoshop Perspective</div> 
            </div>
        </div>
    )
}

export default LandingPage;