import React from "react";

import './Footer.css'

const Footer = () => {

    return (
        <div className="footerWrapper">
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet"></link>
            <p className="footerSubText">
                <a
                className='footerLink'
                target='_blank' 
                href='https://www.linkedin.com/in/josh-s-a33198133/'>
                    LinkedIn
                    </a> • <a 
                        className='footerLink'
                        target='_blank' 
                        href='https://docs.google.com/document/d/1xU2LZ7W8Np-BNtWOabHhBu3DPrTj3EZh73nJ9khBCMo/edit'>
                            Resume</a>
            </p>
        </div>
    )
}

export default Footer
