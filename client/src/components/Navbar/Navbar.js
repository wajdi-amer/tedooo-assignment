import React from 'react';
import './styles.css';
import TedoooIcon from './TedoooIcon';

import { AiOutlineHome, AiOutlineMessage, AiOutlineNotification } from 'react-icons/ai';
import { IconContext } from "react-icons"; // used for editing icon props

const Navbar = () => {
    return (
        <div className='container'>
            <div className='search-container'>
                <a href='/' className='tedooo-icon'>
                    <TedoooIcon />
                </a>
                <input type='text' placeholder='Search...' className='search-input'></input>
            </div>
            <div className='links'>
                <a href='/'>
                    <IconContext.Provider value={{ color: "rgb(45,184,161)" }}>
                        <AiOutlineHome />
                    </IconContext.Provider>
                    <span>  Home</span>
                </a>
                <div title="Messages aren't available yet, coming soon!">
                    <IconContext.Provider value={{ color: "#9a9a9a" }}>
                        <AiOutlineMessage />
                    </IconContext.Provider>
                    <span>  Messaging</span>
                </div>
                <div title="Notifications aren't available yet, coming soon!">
                    <IconContext.Provider value={{ color: "#9a9a9a" }}>
                        <AiOutlineNotification />
                    </IconContext.Provider>
                    <span>  Notifications</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
