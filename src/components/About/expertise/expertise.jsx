import React from 'react';
import Container from "../../usable/Container/Container";
import bg from '../../../assets/images/bg.jpg'
import './expertise.scss'
const ican = [{
    id: 1,
    title: 'Motion Graphics.',
    description: 'From small teasers, to explainers, to full storytelling experiences, I will help you move ideas around.'
}, {
    id: 2,
    title: 'Animated Interactions.',
    description: 'UX is only complete with engaging animations. These are great for showcase or to guide a dev team.'
}, {
    id: 3,
    title: 'Webflow Development.',
    description: 'Bringing visual design, animation and development together to uplift your digital presence.'
}, {
    id: 4,
    title: 'Education.',
    description: 'If you have a team ready to dive into the world of Motion Graphics, I would be delighted to help.'
},]

function Expertise() {
    return (
        <div className='expertise'>
            <Container className={'-xs'}>
                <h1 className='expertise__title'>Know more about <br/>my expertise.</h1>
                <div className='expertise__wrapper'>
                    <img src={bg} alt={bg} className='expertise__wrapper-image'/>
                    <div className='expertise__wrapper-items'>
                        {ican.map(can => {
                            const {id, title, description} = can
                            return (<div key={id} className='expertise__wrapper-items--item'>
                                <p className='item__title'>{title}</p>
                                <p className='item__descr'>{description}</p>
                            </div>)
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Expertise;