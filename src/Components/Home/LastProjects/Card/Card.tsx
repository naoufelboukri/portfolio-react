import React from 'react'
import './Card.scss'

const Card = (props: any) => {    
    return (
        <div className='Card'>
            <img src={ require('../imgs/'+props.item.image) } alt={props.item.name}/>
            <div>
                <h3>{ props.item.name }</h3>
                <span> { props.item.categories.join(' | ') } </span>
            </div>
        </div>
    )
}

export default Card;