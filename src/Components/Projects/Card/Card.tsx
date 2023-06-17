import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

import './Card.scss';

function Card(props: any) {
    return (
        <div className='Card'>
            <div className="informations">
                <span className='tags'>{ props.item.tag.join(' | ') }</span>
                <h3><Link to='/' className='link'>{ props.item.name } ☜</Link></h3>
                <p>{ props.item.description }</p>
                <FontAwesomeIcon icon={faGitAlt} className='git'/>
            </div>
            <img src={props.item.image} alt={props.item.name}/>
        </div>
    )
}

export default Card;