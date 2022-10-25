import React, {useState} from 'react';
import './navbar.scss'
import Icon from "../icon/icon";
import Container from "../Container/Container";
import {NavLink} from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false)
    return (<nav className='navbar'>
        <Container>
            <div className='navbar__wrapper'>
                <NavLink to={'/home'} className='navbar__wrapper-logo'>an.</NavLink>
                <div className='navbar__wrapper-menu' onClick={() => setOpen(!open ? true : false)}>
                    <Icon/>
                </div>
                <div style={{display: !open ? 'none' : "flex"}} className='navbar__wrapper-sidebar hamburger'>
                    <div className='hamburger__wrapper'>
                        <div className='hamburger__wrapper-list'>
                            <ul className='hamburger__wrapper-list--wrapper'>
                                <NavLink activeClassName={'.active'} to={'/home'}>
                                    <li>Home</li>
                                </NavLink>
                                <NavLink activeClassName={'.active'} to={'/work'}>
                                    <li>Work</li>
                                </NavLink>
                                <NavLink activeClassName={'.active'} to={'/about'}>
                                    <li>About</li>
                                </NavLink>
                                <NavLink activeClassName={'.active'} to={'/blog'}>
                                    <li>Blog</li>
                                </NavLink>
                                <NavLink activeClassName={'.active'} to={'/contact'}>
                                    <li>Contact</li>
                                </NavLink>
                            </ul>
                        </div>
                        <div className='hamburger__wrapper-text'>
                            <h1 className='hamburger__wrapper-text--title'>Let’s find solutions together?</h1>
                            <p className='hamburger__wrapper-text--descr'>Use my contacts beloyou need to put a project
                                on the move, let’s work on it!</p>
                            <a className='hamburger__wrapper-text--link'
                               href="mailto:example@example.com">example@example.com</a>
                            <button className='hamburger__wrapper-text--btn'>Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </nav>);
}

export default Navbar;