import React, {forwardRef} from 'react';
import './card.scss'
import {motion} from "framer-motion";

export const Card = forwardRef(({data}, ref) => {
    const {id, image, title, type} = data;

    return (
        <div key={id} className='card' ref={ref}>
            <img src={image} alt={title} className='card__image'/>
            <p className='card__title'>{title}</p>
            <p className='card__type'>{type}</p>
        </div>
    )
})

export const MCard = motion(Card)