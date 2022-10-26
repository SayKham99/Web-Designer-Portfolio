import React from 'react';
import Container from "../../usable/Container/Container";
import photo1 from "../../../assets/images/pic1.jpg";
import './blogHeader.scss'
import Button from "../../usable/button/button";
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
                            <img src={image} alt={'image ' + title}
                                 className='blogHeader__wrapper-item--image-img'/>
                        </div>
                        <div className='blogHeader__wrapper-item--text'>
                            <p className='blogHeader__wrapper-item--text-type'>{type}</p>
                            <h1 className='blogHeader__wrapper-item--text-title'>{title}</h1>
                            <p className='blogHeader__wrapper-item--text-descr'>{description}</p>
                            <Button textcolor={true} url={'/blog'} children={'Read Article'}/>
                        </div>
                    </div>
                )
            })}

        </Container>
    </div>);
}

export default BlogHeader;