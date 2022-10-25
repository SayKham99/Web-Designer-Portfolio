import React from 'react';
import './footer.scss'
import Container from "../Container/Container";
import Button from "../button/button";

function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <div className='footer__info'>
                    <div className='footer__info-box'>
                        <h2 className='footer__title'>Let’s design something <br/> <span>together?</span></h2>
                        <Button children={'Contact Me'} url={'/contact'}/>
                    </div>
                    <div className='footer__info-box'>
                        <h2 className='footer__title'>You can find me on <span>social media</span>:</h2>
                        <ul className='footer__list'>
                            <li>Linkedin</li>
                            <li>Telegram</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
                <div className='footer__creator'>
                    <p className='footer__creator-descr'>Built in UIL-Agency. <br/> Copyright © 2022 João Veríssimo. All
                        rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;