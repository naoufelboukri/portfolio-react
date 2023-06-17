import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Icon.scss';

function Icon(props: any) {
    return (
        <a href="https://www.linkedin.com/in/naoufel-boukri-87692917b/" className='footerLink'>
            <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
        </a>
    );
}

export default Icon;