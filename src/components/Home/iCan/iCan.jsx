import React from 'react';
import './iCan.scss'
import Layout from "../../../layout/layout";
import Container from "../../usable/Container/Container";

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

function ICan() {
    return (<div className='iCan'>
        <Container className={'-xs'}>
            <div className='iCan__wrapper'>
                <h1 className='iCan__wrapper-title'>Here’s what I can <br/> do to help:</h1>
                <div className='iCan__wrapper-items'>
                    {ican.map(can => {
                        const {id, title, description} = can
                        return (<div key={id} className='iCan__wrapper-items--item'>
                            <p className='item__title'>{title}</p>
                            <p className='item__descr'>{description}</p>
                        </div>)
                    })}
                </div>
            </div>
        </Container>
    </div>);
}

export default ICan;