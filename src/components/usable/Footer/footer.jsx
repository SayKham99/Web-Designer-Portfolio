import React from 'react';
import './footer.scss'
import Container from "../Container/Container";
import Button from "../button/button";

function Footer({color}) {
    return (
        <footer className='footer' style={{backgroundColor:!color ? 'black' : '#CCCC33',color:!color ? "white" : "black"}}>
            <Container className={'-xs'}>
                <div className='footer__info'>
                    <div className='footer__info-box'>
                        <h2 className='footer__title' style={{color:!color ? '#fff' : 'black'}}>Let’s design something <br/> <span style={{color:!color ? '#CCCC33' : 'black'}}>together?</span></h2>
                        <Button color={color} textcolor={color} children={'Contact Me'} url={'/contact'}/>
                    </div>
                    <div className='footer__info-box'>
                        <h2 className='footer__title' style={{color:!color ? '#fff' : 'black'}}>You can find me on <span style={{color:!color ? '#DF284C' : 'black'}}>social media</span>:</h2>
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