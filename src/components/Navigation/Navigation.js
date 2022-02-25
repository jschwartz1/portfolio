// React
import React from 'react'

// Assets
import logo from '../../assets/logo.png'

// NavLink component
import { NavLink } from 'react-router-dom'

// CSS
import './Navigation.css'

// Navigation Component
const Navigaton = () => {

    const scrollToWork = () => {
        window.scrollTo({top: 650, behavior: 'smooth'})
    }

    const scrollToBottom = () => {
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
    }

    return (
        <header>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet"></link>
            <div className='topbar-container'>
                <div className='logo'>
                    <div className='logoText'>
                        <NavLink className='menuItemText' to='/portfolio'>
                            <img src={logo} className='logoWrapper'></img>
                        </NavLink>
                    </div>
                </div>
                <div className='heading'>
                    <div className='menuItem'>
                        <NavLink className='menuItemText' to='/portfolio'>
                            Home
                        </NavLink>
                    </div>
                    <div className='menuItem' onClick={scrollToWork}>
                        <NavLink className='menuItemText' to='/work'>
                            Work
                        </NavLink>
                    </div>
                    <div className='menuItem' onClick={scrollToBottom}>
                        <NavLink className='menuItemText' to='/contact'>
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navigaton
