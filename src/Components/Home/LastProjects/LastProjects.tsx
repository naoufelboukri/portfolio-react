import React from 'react'
import './LastProjects.scss'

import { PROJECTS } from './Project';
import Card from './Card/Card';

const LastProjects = () => {

    const cards = PROJECTS.slice(0, 2).map((project, index) => {
        return <Card item={project} key={index} index={index}></Card>
    })

    return (
        <section className='LastProject'>
            <h2>Derniers travails</h2>
            <hr />
            <div className="cards">
                { cards }
            </div>
        </section>
    )
}

export default LastProjects;