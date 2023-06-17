import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Navbar.scss';

function Navbar () {

    const navButtonClickHandler = () => {

    }

    return (
        <nav>
            <ul id='navList'>
                <li><Link to="/projets" className='link'>Projets</Link></li>
                <li><Link to="" className='link'>Formations</Link></li>
                <li><Link to="" className='link'>Ressources</Link></li>
            </ul>

            <button id='navButton' onClick={navButtonClickHandler}><FontAwesomeIcon icon={faBars}/></button>
        </nav>
    )
}

export default Navbar;