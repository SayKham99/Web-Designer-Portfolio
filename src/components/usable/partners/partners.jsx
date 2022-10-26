import React from 'react';
import './partners.scss'
import Container from "../Container/Container";

import photo1 from '../../../assets/images/partner1.png'
import photo2 from '../../../assets/images/partner2.png'
import photo3 from '../../../assets/images/partner3.png'
import photo4 from '../../../assets/images/partner4.png'

function Partners() {
    return (
        <div className='partners'>
            <Container className={'-xs'}>
                <div className='partners__wrapper'>
                    <h1 className='partners__wrapper-title'>Friends I’ve made <br/> along the way.</h1>
                    <div className='partners__wrapper-partners'>
                        <img src={photo1} alt="partner1" className='partners__wrapper-partners--partner'/>
                        <img src={photo2} alt="partner2" className='partners__wrapper-partners--partner'/>
                        <img src={photo3} alt="partner3" className='partners__wrapper-partners--partner'/>
                        <img src={photo4} alt="partner4" className='partners__wrapper-partners--partner'/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Partners;