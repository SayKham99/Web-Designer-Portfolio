import React from 'react';
import {Container} from "../../usable/Container/Container";
import photo1 from "../../../assets/images/pic1.jpg";
import './blogHeader.scss'
import Button from "../../usable/button/button";
import {motion} from 'framer-motion'

const data = [{
    id: 1,
    title: 'Global Academy',
    type: 'Animated Interaction',
    description: 'Animation concepts for the Magicians microsite promoting the series.',
    image: photo1,
}]

function BlogHeader() {
    return (<div className='blogHeader'>
        <Container>
            {data.map(item => {
                const {title, type, image, id, description} = item;
                return (
                    <div className='blogHeader__wrapper-item' key={id}>
                        <div className='blogHeader__wrapper-item--image'>
                            <motion.img initial={{x: "100px", opacity: 0}}
                                        animate={{x: 0, opacity: 1, transition: {ease: "easeIn", delay: .5}}} src={image}
                                        alt={'image ' + title}
                                        className='blogHeader__wrapper-item--image-img'/>
                        </div>
                        <div className='blogHeader__wrapper-item--text'>
                            <motion.p initial={{x: "-50px", opacity: 0}}
                                      animate={{x: 0, opacity: 1, transition: {ease: "easeIn", delay: .5}}}
                                      className='blogHeader__wrapper-item--text-type'>{type}</motion.p>
                            <motion.h1 initial={{y: "-30px", opacity: 0}}
                                       animate={{y: 0, opacity: 1, transition: {ease: "easeIn", delay: .5}}}
                                       className='blogHeader__wrapper-item--text-title'>{title}</motion.h1>
                            <motion.p initial={{y: "30px", opacity: 0}}
                                      animate={{y: 0, opacity: 1, transition: {ease: "easeIn", delay: .5}}}
                                      className='blogHeader__wrapper-item--text-descr'>{description}</motion.p>
                            <motion.div initial={{y: "30px", opacity: 0}}
                                        animate={{y: 0, opacity: 1, transition: {ease: "easeIn", delay: .5}}}>
                                <Button textcolor={true} url={'/blog'} children={'Read Article'}/>
                            </motion.div>
                        </div>
                    </div>
                )
            })}

        </Container>
    </div>);
}

export default BlogHeader;