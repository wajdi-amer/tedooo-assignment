import React from 'react';
import './styles.css';
import TedoooIcon from './TedoooIcon';

import { AiOutlineHome, AiOutlineMessage, AiOutlineNotification } from 'react-icons/ai';
import { IconContext } from "react-icons";

const Navbar = () => {
    return (
        <div className='container'>
            <div className='search-container'>
                <div className='tedooo-icon'>
                    <TedoooIcon />
                </div>
                <input type='text' placeholder='Search...' className='search-input'></input>
            </div>
            <div className='links'>
                <div>
                    <IconContext.Provider value={{ color: "rgb(45,184,161)" }}>
                        <AiOutlineHome />
                    </IconContext.Provider>
                    <a href='/comingsoon'>Home</a>
                </div>
                <div>
                    <IconContext.Provider value={{ color: "rgb(45,184,161)" }}>
                        <AiOutlineMessage />
                    </IconContext.Provider>
                    <a href='/comingsoon'>Messaging</a>
                </div>
                <div>
                    <IconContext.Provider value={{ color: "rgb(45,184,161)" }}>
                        <AiOutlineNotification />
                    </IconContext.Provider>
                    <a href='/comingsoon'>Notifications</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
