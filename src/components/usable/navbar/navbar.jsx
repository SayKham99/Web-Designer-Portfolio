import React, {useRef, useState} from 'react';
import './navbar.scss'
import Icon from "../icon/icon";
import {Container} from "../Container/Container";
import {NavLink} from "react-router-dom";
import {motion, useCycle, AnimatePresence} from 'framer-motion'

const variants = {
    state: {
        height: 0, opacity: 0,
    }, open: {
        height: "100vh", display: "flex", opacity: 1,
    }, closed: {
        height: "-200%", opacity: 0, transition: {delay: 1.2, duration: 1}
    },
}

const itemVariants = {
    closed: {
        opacity: 0
    }, open: {opacity: 1}
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2, staggerDirection: -1
        }
    }, open: {
        transition: {
            staggerChildren: 0.1, staggerDirection: 1
        }
    }
};

const menus = [{
    id: 1, url: '/', text: 'Home'
}, {
    id: 2, url: '/work', text: 'Work'
}, {
    id: 3, url: '/about', text: 'About'
}, {
    id: 4, url: '/blog', text: 'Blog'
}, {
    id: 5, url: '/contact', text: 'Contact'
},]

function Navbar() {
    const [isOpen, toggleOpen] = useCycle(false, true)
    return (<nav className='navbar'>
        <Container>
            <div className='navbar__wrapper'>
                <NavLink to={'/'} className='navbar__wrapper-logo'>an.</NavLink>
                <div onClick={() => toggleOpen()} className='navbar__wrapper-menu'>
                    <Icon/>
                </div>
                <AnimatePresence>
                    {isOpen && (<motion.div initial={"state"} variants={variants}
                                            animate={"open"}
                                            exit={"closed"}
                                            style={{display: "flex"}}
                                            className='navbar__wrapper-sidebar hamburger'>
                        <div className='hamburger__wrapper'>
                            <div className='hamburger__wrapper-list'>
                                <motion.ul initial="closed"
                                           animate="open"
                                           exit="closed"
                                           variants={sideVariants}
                                           className='hamburger__wrapper-list--wrapper'>
                                    {menus.map(menu => {
                                        const {id, text, url} = menu;
                                        return (
                                            <NavLink key={id} onClick={() => toggleOpen()} activeClassName={'.active'}
                                                     to={url}>
                                                <motion.li whileHover={{scale: 1.1}}
                                                           variants={itemVariants}>{text}</motion.li>
                                            </NavLink>)
                                    })}
                                </motion.ul>
                            </div>
                            <motion.div initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={sideVariants} className='hamburger__wrapper-text'>
                                <motion.h1
                                    variants={itemVariants} className='hamburger__wrapper-text--title'>Let’s find
                                    solutions together?
                                </motion.h1>
                                <motion.p
                                    variants={itemVariants} className='hamburger__wrapper-text--descr'>Use my contacts
                                    beloyou need to put a
                                    project
                                    on the move, let’s work on it!
                                </motion.p>
                                <motion.a
                                    variants={itemVariants} className='hamburger__wrapper-text--link'
                                    href="mailto:example@example.com">example@example.com
                                </motion.a>
                                <motion.button
                                    variants={itemVariants} className='hamburger__wrapper-text--btn'>Contact Me
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>)}
                </AnimatePresence>

            </div>
        </Container>
    </nav>);
}

export default Navbar;

/*onClick={() => setOpen(!open ? true : false)}*/