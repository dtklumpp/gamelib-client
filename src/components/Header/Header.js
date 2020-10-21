import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
    return (
        <header>
            <div className='logo'>
                <NavLink to='/'>Games!</NavLink>
            </div>
            <div className='links'>
                <ul>
                    <li>
                        <NavLink to='/games'>All Games</NavLink>
                    </li>
                    <li>
                        <NavLink to='/games/new'>Add New Game</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;