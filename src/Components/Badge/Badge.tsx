import React from 'react'

import './Badge.scss';
import badge from './Badge.png';

const Badge = () => {
    return (
        <div className='Badge'>
            <hr />
            <img src={ badge } alt="badge" />
        </div>
    );
}

export default Badge;