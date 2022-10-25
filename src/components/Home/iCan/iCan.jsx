import React from 'react';
import './iCan.scss'
import Layout from "../../../layout/layout";
import Container from "../../usable/Container/Container";
function ICan() {
    return (
        <div className='iCan'>
            <Container className={'-xs'}>
                <div className='iCan__wrapper'>
                    <h1 className='iCan__wrapper-title'>Here’s what I can <br/> do to help:</h1>
                    <div className='iCan__wrapper-items'>
                        <div className='iCan__wrapper-items--item'>
                            <p className='item__title'>Motion Graphics.</p>
                            <p className='item__descr'>From small teasers, to explainers, to full storytelling experiences, I will help you move ideas around.</p>
                        </div>
                        <div className='iCan__wrapper-items--item'>
                            <p className='item__title'>Animated Interactions.</p>
                            <p className='item__descr'>UX is only complete with engaging animations. These are great for showcase or to guide a dev team.</p>
                        </div>
                        <div className='iCan__wrapper-items--item'>
                            <p className='item__title'>Webflow Development.</p>
                            <p className='item__descr'>Bringing visual design, animation and development together to uplift your digital presence.</p>
                        </div>
                        <div className='iCan__wrapper-items--item'>
                            <p className='item__title'>Education.</p>
                            <p className='item__descr'>If you have a team ready to dive into the world of Motion Graphics, I would be delighted to help.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ICan;