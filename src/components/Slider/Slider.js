import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

// CSS
import './Slider.css'

// Icons
import arrowIconLeft from '../../assets/arrow_icon_left.png'
import arrowIconRight from '../../assets/arrow_icon_right.png'

// Hero Images
import constructionDetailsHeroOne from '../../assets/construction_details_hero_one.jpg'
import constructionDetailsHeroTwo from '../../assets/construction_details_hero_two.jpg'

const Slider = () => {

    const[currentSlide, setCurrentSlide] = useState(0)

    const slideLength = 2;

    useEffect(() => {
        setCurrentSlide(0)
        window.scrollTo(0, 0)
    }, [])

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }
 
    return (
        <div className='slider'>
            <h1 className='sliderHeading'>Construction Details</h1>
            <div className='heroWrapper'>
                <img className='iconWrapper' src={arrowIconLeft} onClick={prevSlide}></img>
                { currentSlide === 0 ? 
                <div className='slideWrapper'>
                    <img src={constructionDetailsHeroOne} alt='slide' className='slideImageWrapper'></img>
                </div> : 
                <div></div> }
                { currentSlide === 1 ? 
                <div className='slideWrapper'>
                    <img src={constructionDetailsHeroTwo} alt='slide' className='slideImageWrapper'></img>
                </div> :
                <div></div>}
                <img className='iconWrapper' src={arrowIconRight} onClick={nextSlide}></img>
            </div>
            <div className='subImagesContainer'>
                <img src={constructionDetailsHeroOne} className='subImagesWrapper'></img>
                <img src={constructionDetailsHeroTwo} className='subImagesWrapper'></img>
            </div>
        </div>
    )

}

export default Slider