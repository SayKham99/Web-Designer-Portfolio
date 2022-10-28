import React from 'react';
import './footer.scss'
import {Container} from "../Container/Container";
import Button from "../button/button";
import {motion} from "framer-motion";

const titleVariant = {
    hidden: {
        y: 50, opacity: 0
    }, visible: {
        y: 0, opacity: 1, trasition: {
            delay: .5, duration: .3
        }
    }
}

function Footer({color}) {
    return (
        <motion.footer
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{amount: .2, once: true}}
            className='footer'
            style={{backgroundColor: !color ? 'black' : '#CCCC33', color: !color ? "white" : "black"}}
        >
            <Container className={'-xs'}>
                <div className='footer__info'>
                    <div className='footer__info-box'>
                        <motion.h2 variants={titleVariant} className='footer__title'
                                   style={{color: !color ? '#fff' : 'black'}}>Let’s design something <br/> <span
                            style={{color: !color ? '#CCCC33' : 'black'}}>together?</span></motion.h2>
                        <Button color={color} textcolor={color} children={'Contact Me'} url={'/contact'}/>
                    </div>
                    <div className='footer__info-box'>
                        <motion.h2 variants={titleVariant} className='footer__title'
                                   style={{color: !color ? '#fff' : 'black'}}>You can find me on <span
                            style={{color: !color ? '#DF284C' : 'black'}}>social media</span>:
                        </motion.h2>
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
        </motion.footer>
    );
}

export default Footer;