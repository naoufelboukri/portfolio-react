import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Presentation.scss'
import image from './Image.png';

const Presentation = () => {
    return (
        <div className='Presentation'>
            <div className='content'>
                <h2><FontAwesomeIcon icon={faArrowRight} /> Créons votre <span>site internet</span></h2>
                <div className="content-child">

                    <p>
                    Je suis prêt à apporter ma contribution à vos projets. En choisissant mes services, vous bénéficierez d'un <span>Professionnel dévoué</span>, qui s'engage à comprendre vos besoins spécifiques et à livrer un <span>Travail de qualité</span>, dans les délais impartis. 
                    </p>
                    <a href="google.com">Besoin d'un site web ?</a>
                    {/* <span className='tag'>Fullstack Developper</span> */}
                </div>
            </div>
            <img src={image} alt="sites" />
        </div>
        )
}

export default Presentation