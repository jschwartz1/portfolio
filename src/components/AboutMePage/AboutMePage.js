import React from 'react'

import './AboutMePage.css'

const AboutMePage = () => {
    return (
        <div data-aos='fade-zoom-in' data-aos-delay='700'>
            {/* <div className="musicPageHeroWrapper">
                <img className="musicPageHeroImageAbout" src={aboutMeHero}></img>
            </div> */}
            <div className='subHeroWrapperSpotify'>
                <p className="subHeroHeaderAboutMe">
                    About Me
                </p>
            </div>
            <div className="postContent">
                <p>
                    Hey! I'm Luke. I'm a third year Finance turned Computer Science major at UGA, but I've been
                    programming since my Sophomore year of high school. I've always been drawn to the amount of
                    different opportunities available in tech, and love integrating my creative endeavors with
                    Computer Science. 
                </p>
                <p>
                    As much as there are opportunities available in technology, I've really found an affinity for
                    product management and design. About a year ago, I got started on building a peer-to-peer 
                    marketplace called Stretched with my current business partner. From the beginning, the entire 
                    platform has been mine to build from the ground up. It's been amazing to see my self-taught skills
                    being applied to a real-world application.  
                </p>
                <p>
                    I also recently took on a Software Engineering role at a telehealth company in Sweden called Kry.
                    Besides having the experience of living and working in a foreign country, the opportunity gave me
                    a fantastic perspective on what it's like to work on a diverse, fast-moving, and forward-thinking team. 
                </p>
                <p>
                    It's because of technology that I've been awarded these opportunities, and I'd love to continue exploring
                    more of what it has to offer. 
                </p>
                <p>
                    Outside of work and school I write, record, produce, and release my own music to major streaming
                    platforms like Spotify and Apple Music. I love photography and travel, and will take any opportunity I get
                    to explore more of this beautiful Earth. 
                </p>
                <p>

                </p>
            </div>
        </div>
    )
}

export default AboutMePage