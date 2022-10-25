import React from 'react';
import './about.scss'
import Container from "../../usable/Container/Container";
import Button from "../../usable/button/button";
function About() {
    return (
        <div className='smallAbout'>
            <Container className={'-xs'}>
                <h1 className='smallAbout__title'>Hey, there! I’m a Motion & Interaction Designer based in Viseu, Portugal. I focus on animation and Webflow development.</h1>
                <Button color={true} children={'More About Me'} url={'/about'}/>
            </Container>
        </div>
    );
}

export default About;