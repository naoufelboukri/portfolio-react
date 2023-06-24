import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

import './Me.scss'

const Me = () => {
    return (
        <section className='Me'>
            <span><FontAwesomeIcon icon={faSchool} /></span>
            <p>
                Je suis Naoufel Boukri, étudiant en alternance à <a href='https://etna.io/'>l’ETNA</a>, spécialisé en architecture logicielle et développement d'applications. En tant que développeur, j'ai acquis une solide expertise dans la conception et la réalisation d'applications performantes. Je suis capable de fournir des solutions adaptées dans les délais impartis. Faites-moi confiance pour apporter mon expertise à votre projet et créer des solutions informatiques de qualité.
            </p>
        </section>
    )
}

export default Me