import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/oceans">Ocean</NavLink></li>
                <li><NavLink to="/mountains">Mountains</NavLink></li>
                <li><NavLink to="/trees">Trees</NavLink></li>
            </ul>
        </nav>
    )
    
}
    


export default NavBar;