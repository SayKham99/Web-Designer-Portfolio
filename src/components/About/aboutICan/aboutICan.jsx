import React from 'react';
import {Container} from "../../usable/Container/Container";
import './aboutICan.scss'
import {motion} from "framer-motion";

const ican = [
    {
        id: 1,
        title: 'Motion Graphics.',
        description: 'From small teasers, to explainers, to full storytelling experiences, I will help you move ideas around.'
    },
    {
        id: 2,
        title: 'Animated Interactions.',
        description: 'UX is only complete with engaging animations. These are great for showcase or to guide a dev team.'
    },
    {
        id: 3,
        title: 'Webflow Development.',
        description: 'Bringing visual design, animation and development together to uplift your digital presence.'
    },
    {
        id: 4,
        title: 'Education.',
        description: 'If you have a team ready to dive into the world of Motion Graphics, I would be delighted to help.'
    },
    {
        id: 5,
        title: 'Webflow Development.',
        description: 'Bringing visual design, animation and development together to uplift your digital presence.'
    },
    {
        id: 6,
        title: 'Education.',
        description: 'If you have a team ready to dive into the world of Motion Graphics, I would be delighted to help.'
    },
]

const titleVariant = {
    hidden: {
        y: 50, opacity: 0
    }, visible: {
        y: 0, opacity: 1, trasition: {
            delay: .5
        }
    }
}

const textVariant = {
    hidden: {
        y: 50, opacity: 0
    }, visible: custom => ({
        y: 0, opacity: 1, transition: {
            delay: (custom * .2),
            duration: .3
        }
    })
}

function AboutICan() {
    return (
        <div className='aboutICan'>
            <Container className={'-xs'}>
                <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{amount: .5, once: true}}
                    className='aboutICan__wrapper'
                >
                    <motion.h1 variants={titleVariant} className='aboutICan__wrapper-title'>Here’s what I can <br/> do
                        to help:
                    </motion.h1>
                    <div className='aboutICan__wrapper-items'>
                        {ican.map(can => {
                            const {id, title, description} = can
                            return (
                                <motion.div
                                    initial={"hidden"}
                                    whileInView={"visible"}
                                    viewport={{amount: .7, once: true}}
                                    key={id}
                                    className='aboutICan__wrapper-items--item'>
                                    <motion.p variants={textVariant} custom={id + 1}
                                              className='item__title'>{title}</motion.p>
                                    <motion.p variants={textVariant} custom={id + 2}
                                              className='item__descr'>{description}</motion.p>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}

export default AboutICan;