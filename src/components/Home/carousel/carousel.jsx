import React, {useEffect, useState} from 'react';
import './carousel.scss'
import photo1 from '../../../assets/images/pic1.jpg'
import photo2 from '../../../assets/images/pic2.jpg'
import photo3 from '../../../assets/images/pic3.jpg'
import photo4 from '../../../assets/images/pic4.jpg'
import photo5 from '../../../assets/images/pic5.jpg'
import photo6 from '../../../assets/images/pic6.jpg'
import photo7 from '../../../assets/images/pic7.jpg'
import photo8 from '../../../assets/images/pic8.jpg'
import photo9 from '../../../assets/images/pic9.jpg'

const data = [
    {
        id: 1,
        title: 'Hokim Akademiyasi',
        type: 'Application Design',
        descr: 'Animation concepts for the Magicians microsite promoting the series.',
        image: photo1,
    },
    {
        id: 2,
        title: 'MedArt Group Clinic',
        type: 'Animated Interaction',
        descr: 'Animation concepts for the Magicians microsite promoting the series.',
        image: photo2,
    },
    {
        id: 3,
        title: 'Skerio',
        type: 'Application Design',
        descr: 'Animation concepts for the Magicians microsite promoting the series.',
        image: photo3,
    },
    {
        id: 4,
        title: 'e-Commerce',
        type: 'Application Design',
        descr: 'Animation concepts for the Magicians microsite promoting the series.',
        image: photo4,
    },
    {
        id: 5,
        title: 'Mavouranahr Travel Agency',
        type: 'Animated Interaction',
        descr: 'Animation concepts for the Magicians microsite promoting the series.',
        image: photo5,
    },
    {
        id: 6,
        title: 'Skerio',
        type: 'WebSite Design',
        descr: 'Animation concepts for the Magicians microsite promoting the series.',
        image: photo6,
    },
    {
        id: 7,
        title: 'MedArt Group Clinic',
        type: 'Website',
        descr: 'Animation concepts for the Magicians microsite promoting the series.',
        image: photo7,
    },
    {
        id: 8,
        title: 'AFC',
        type: 'WebSite Design',
        descr: 'Animation concepts for the Magicians microsite promoting the series.',
        image: photo8,
    },
    {
        id: 9,
        title: 'Global Academy',
        type: 'Animated Interaction',
        descr: 'Animation concepts for the Magicians microsite promoting the series.',
        image: photo9,
    },
]

function Carousel() {
    const [items, setItems] = useState(data)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = items.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [items, index])

    useEffect(() => {
        const slide = setInterval(() => {
            setIndex(index + 1)
        }, 3000)
        return () => clearInterval(slide)
    })

    return (<header className='carousel'>
        <div className='carousel__wrapper'>
            <div className='carousel__wrapper-item'>
                {items.map((item, itemId) => {
                    const {id, title, type, descr, image} = item
                    let pos = 'nextSlide'

                    if (itemId === index) {
                        pos = 'activeSlide'
                    }

                    if (itemId === index - 1 || (index === 0 && itemId === items.length - 1)) {
                        pos = 'lastSlide'
                    }

                    return (<article className={`item ${pos}`} key={id}>
                        <div className='item__text'>
                            <h1 className='item__text-title'>{title}</h1>
                            <p className='item__text-type'>{type}</p>
                            <p className='item__text-descr'>{descr}</p>
                        </div>
                        <div className='item__image'>
                            <img src={image} alt={'image ' + title} className='item__image-img'/>
                        </div>
                    </article>)
                })}
                <div className='btns'>
                    <span className='prev' onClick={() => setIndex(index - 1)}>Prev</span>
                    <span className='next' onClick={() => setIndex(index + 1)}>Next</span>
                </div>
            </div>

        </div>
    </header>);
}

export default Carousel;