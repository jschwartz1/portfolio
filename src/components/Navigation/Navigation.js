import React from 'react'

import { NavLink } from 'react-router-dom'

import './Navigation.css'

const Navigaton = () => {
    return (
        <header>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet"></link>
            <div className='topbar-container'>
                <div className='logo'>
                    <div className='logoText'>
                        <NavLink className='menuItemText' to='/portfolio'>
                            J S . L A
                        </NavLink>
                    </div>
                </div>
                <div className='heading'>
                    <div className='menuItem'>
                        <NavLink className='menuItemText' to='/portfolio'>
                            Home
                        </NavLink>
                    </div>
                    <div className='menuItem'>
                        <NavLink className='menuItemText' to='/work'>
                            Work
                        </NavLink>
                    </div>
                    <div className='menuItem'>
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
