import React from 'react';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import Icon from './Icon/Icon';

import './Footer.scss'; 

function Footer() {
    return (
        <footer>
            <div className="socialNetwork">
                <Icon icon={faLinkedinIn}></Icon>
            </div>

            <a href="mailto:naoufel@naandev.com">naoufel@naandev.com</a>
        </footer>
    )
}

export default Footer;