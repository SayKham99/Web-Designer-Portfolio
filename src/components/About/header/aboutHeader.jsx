import React from 'react';
import Container from "../../usable/Container/Container";
import photo1 from "../../../assets/images/pic3.jpg";
import './aboutHeader.scss'
const data = [{
    id: 1,
    title: 'Global Academy',
    type: 'Animated Interaction',
    description: 'Animation concepts for the Magicians microsite promoting the series.',
    image: photo1,
}]

function AboutHeader() {
    return (<div className='workHeader'>
        <Container>
            {data.map(item => {
                const {title, type, image, id, description} = item;
                return (
                    <div className='workHeader__wrapper-item' key={id}>
                        <div className='workHeader__wrapper-item--text'>
                            <h1 className='workHeader__wrapper-item--text-title'>{title}</h1>
                            <p className='workHeader__wrapper-item--text-type'>{type}</p>
                            <p className='workHeader__wrapper-item--text-descr'>{description}</p>
                        </div>
                        <div className='workHeader__wrapper-item--image'>
                            <img src={image} alt={'image ' + title}
                                 className='workHeader__wrapper-item--image-img'/>
                        </div>
                    </div>
                )
            })}

        </Container>
    </div>);
}

export default AboutHeader;