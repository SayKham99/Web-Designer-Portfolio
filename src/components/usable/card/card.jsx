import React from 'react';
import './card.scss'

function Card({data}) {
    const {id, title, image, type} = data;
    return (
        <div key={id} className='card'>
            <img src={image} alt={title} className='card__image'/>
            <p className='card__title'>{title}</p>
            <p className='card__type'>{type}</p>
        </div>
    );
}

export default Card;