import React from 'react';
import './about.scss'
import {Container} from "../../usable/Container/Container";
import Button from "../../usable/button/button";
import {motion} from "framer-motion";

const aboutVariant = {
    hidden: {
        y: -330,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

function About() {
    return (
        <div className='smallAbout'>
            <Container className={'-xs'}>
                <motion.h1 initial={{y: 100, opacity: 0}}
                           whileInView={{y: 0, opacity: 1, transistion: {delay: 1,duration:.3}}}
                           viewport={{amount: 0.5, once: true}}
                           className='smallAbout__title'
                >Hey, there! I’m a Motion &
                    Interaction Designer based in Viseu,
                    Portugal. I focus on animation and Webflow development.
                </motion.h1>
                <Button color={true} children={'More About Me'} url={'/about'}/>
            </Container>
        </div>
    );
}

export default About;