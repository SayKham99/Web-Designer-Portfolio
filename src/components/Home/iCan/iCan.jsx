import React from 'react';
import './iCan.scss'
import Layout from "../../../layout/layout";
import {Container} from "../../usable/Container/Container";
import {motion} from 'framer-motion'

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

const titleVariant = {
    hidden: {
        y: 50, opacity: 0
    }, visible: {
        y: 0, opacity: 1, trasition: {
            delay: .5, duration: .3
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

function ICan() {
    return (<div className='iCan'>
        <Container className={'-xs'}>
            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{amount: .5, once: true}}
                className='iCan__wrapper'
            >
                <motion.h1 variants={titleVariant} className='iCan__wrapper-title'>Here’s what I can <br/> do to help:
                </motion.h1>
                <div className='iCan__wrapper-items'>
                    {ican.map(can => {
                        const {id, title, description} = can
                        return (<motion.div
                            initial={"hidden"}
                            whileInView={"visible"}
                            viewport={{amount: .9, once: true}}
                            key={id} className='iCan__wrapper-items--item'
                        >
                            <motion.p custom={id + 1} variants={textVariant} className='item__title'>{title}</motion.p>
                            <motion.p custom={id + 2} variants={textVariant}
                                      className='item__descr'>{description}</motion.p>
                        </motion.div>)
                    })}
                </div>
            </motion.div>
        </Container>
    </div>);
}

export default ICan;