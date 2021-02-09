import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super()
    }

    handleLinkChange = e => {
        let link = e.target.value;
        this.props.changeData(link.value)
    }

    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li onClick={ this.handleLinkChange }><NavLink to="/ocean">Ocean</NavLink></li>
                    <li onClick={ this.handleLinkChange }><NavLink to="/mountain">Mountains</NavLink></li>
                    <li><NavLink to="/trees">Trees</NavLink></li>
                </ul>
            </nav>
        )
    }
}
    


export default NavBar;