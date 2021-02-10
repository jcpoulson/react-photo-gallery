import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {

    return (
        <nav className="main-nav">
            <ul>
                {/* Calling the app callback and passing the given link values for the changeData function */}
                <li onClick={ () => props.changeData("oceans") }><NavLink to="/oceans">Ocean</NavLink></li>
                <li onClick={ () => props.changeData("Mountain") }><NavLink to="/mountains">Mountains</NavLink></li>
                <li onClick={ () => props.changeData("trees") }><NavLink to="/trees">Trees</NavLink></li>
            </ul>
        </nav>
    )
    
}
    


export default NavBar;