import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import photo1 from "../../../assets/images/pic1.jpg";
import photo2 from "../../../assets/images/pic2.jpg";
import photo3 from "../../../assets/images/pic3.jpg";
import photo4 from "../../../assets/images/pic4.jpg";
import photo5 from "../../../assets/images/pic5.jpg";
import photo6 from "../../../assets/images/pic6.jpg";
import photo7 from "../../../assets/images/pic7.jpg";
import photo8 from "../../../assets/images/pic8.jpg";
import photo9 from "../../../assets/images/pic9.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.scss";

// import required modules
import {Navigation, Pagination,Autoplay} from "swiper";

const data = [{
    id: 1,
    title: 'Hokim Akademiyasi',
    type: 'Application Design',
    description: 'Animation concepts for the Magicians microsite promoting the series.',
    image: photo1,
}, {
    id: 2,
    title: 'MedArt Group Clinic',
    type: 'Animated Interaction',
    description: 'Animation concepts for the Magicians microsite promoting the series.',
    image: photo2,
}, {
    id: 3,
    title: 'Skerio (Project)',
    type: 'Application Design',
    description: 'Animation concepts for the Magicians microsite promoting the series.',
    image: photo3,
}, {
    id: 4,
    title: 'e-Commerce (Project)',
    type: 'Application Design',
    description: 'Animation concepts for the Magicians microsite promoting the series.',
    image: photo4,
}, {
    id: 5,
    title: 'Mavouranahr Travel',
    type: 'Animated Interaction',
    description: 'Animation concepts for the Magicians microsite promoting the series.',
    image: photo5,
}, {
    id: 6,
    title: 'Skerio (Project)',
    type: 'WebSite Design',
    description: 'Animation concepts for the Magicians microsite promoting the series.',
    image: photo6,
}, {
    id: 7,
    title: 'MedArt Group',
    type: 'Website',
    description: 'Animation concepts for the Magicians microsite promoting the series.',
    image: photo7,
}, {
    id: 8,
    title: 'AFC (Project)',
    type: 'WebSite Design',
    description: 'Animation concepts for the Magicians microsite promoting the series.',
    image: photo8,
}, {
    id: 9,
    title: 'Global Academy',
    type: 'Animated Interaction',
    description: 'Animation concepts for the Magicians microsite promoting the series.',
    image: photo9,
},]


function SwiperCarousel() {

    return (<header className='carousel'>
        <div className='carousel__wrapper'>
            <Swiper autoplay={{delay:1000}} loop={true} pagination={{clickable: true}} navigation={true} modules={[Navigation, Pagination,Autoplay]}
                    className="mySwiper">
                {data.map(items => {
                    const {title, type, image, id, description} = items;
                    return (<SwiperSlide>
                        <div className='carousel__wrapper-item' key={id}>
                            <div className='carousel__wrapper-item--text'>
                                <h1 className='carousel__wrapper-item--text-title'>{title}</h1>
                                <p className='carousel__wrapper-item--text-type'>{type}</p>
                                <p className='carousel__wrapper-item--text-descr'>{description}</p>
                            </div>
                            <div className='carousel__wrapper-item--image'>
                                <img src={image} alt={'image ' + title}
                                     className='carousel__wrapper-item--image-img'/>
                            </div>
                        </div>
                    </SwiperSlide>)
                })}
            </Swiper>
        </div>
    </header>);
}

export default SwiperCarousel;