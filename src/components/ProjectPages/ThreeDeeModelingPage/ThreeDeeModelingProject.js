// React
import React, { useState, useEffect } from 'react'

// Assets
import landingGrid from '../../../assets/landing_grid.png'
import landingGridReflected from '../../../assets/landing_grid_reflected.png'
import heroOne from '../../../assets/three_dee_modeling_hero_1.jpg'
import heroTwo from '../../../assets/three_dee_modeling_hero_2.jpg'
import heroThree from '../../../assets/three_dee_modeling_hero_3.jpg'

// Icons
import arrowIconLeft from '../../../assets/arrow_icon_left.png'
import arrowIconRight from '../../../assets/arrow_icon_right.png'

const ThreeDeeModelingProject = () => {
    
    const[currentSlide, setCurrentSlide] = useState(0)
    const slideLength = 3;

    useEffect(() => {
        window.scrollTo(0, 0)
        setCurrentSlide(0)
    }, [])

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }

    const goToSlide = (slideNum) => {
        setCurrentSlide(slideNum)
    }

    return (
        <div className="master">
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet"></link>
            <img className="landingGridReflected" src={landingGridReflected}></img>
            <div className='accordionWrapper'>
                <div className='slider'>
                    <h1 className='sliderHeading'>3D Modeling</h1>
                    <div className='heroWrapper'>
                        <img className='iconWrapper' src={arrowIconLeft} onClick={prevSlide}></img>
                        { currentSlide === 0 ? 
                        <div className='slideWrapper'>
                            <img src={heroOne} alt='slide' className='slideImageWrapper'></img>
                        </div> : 
                        <div></div> }
                        { currentSlide === 1 ? 
                        <div className='slideWrapper'>
                            <img src={heroTwo} alt='slide' className='slideImageWrapper'></img>
                        </div> :
                        <div></div>}
                        { currentSlide === 2 ? 
                        <div className='slideWrapper'>
                            <img src={heroThree} alt='slide' className='slideImageWrapper'></img>
                        </div> :
                        <div></div>}
                    <img className='iconWrapper' src={arrowIconRight} onClick={nextSlide}></img>
            </div>
            <div className='subImagesContainer'>
                <img src={heroOne} className='subImagesWrapper' onClick={() => goToSlide(0)}></img>
                <img src={heroTwo} className='subImagesWrapper' onClick={() => goToSlide(1)}></img>
                <img src={heroThree} className='subImagesWrapper' onClick={() => goToSlide(2)}></img>
            </div>
        </div>
            </div>
            <img className='landingGridReflected' src={landingGrid}></img>
        </div>
    )

}

export default ThreeDeeModelingProject