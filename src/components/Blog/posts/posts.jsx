import {useState} from 'react';
import Container from "../../usable/Container/Container";
import './posts.scss'

import photo1 from '../../../assets/images/project1.jpg'
import photo2 from '../../../assets/images/project2.jpg'
import photo3 from '../../../assets/images/project3.jpg'
import Card from "../../usable/card/card";

const types = [
    {
        id: 1,
        category: 'all',
        text: 'All'
    },
    {
        id: 2,
        category: 'first',
        text: 'First'
    },
    {
        id: 3,
        category: 'second',
        text: 'Second'
    },
    {
        id: 4,
        category: 'third',
        text: 'Third'
    },
];

const posts = [
    {
        id: 1,
        image: photo1,
        title: 'Video Euro 2016.',
        type: 'first'
    },
    {
        id: 2,
        image: photo2,
        title: 'Video Euro 2016.',
        type: 'second'
    },
    {
        id: 3,
        image: photo3,
        title: 'Video Euro 2016.',
        type: 'third'
    },
]

function Projects() {
    const [categoryType, setCategoryType] = useState('all')

    return (
        <div className='projects'>
            <Container className={'-xs'}>
                <ul className='projects__types'>
                    {types.map(type => {
                        const {id, category, text} = type;
                        return (
                            <li id={id} className={`projects__types-type${categoryType === category ? '--active' : ''}`}
                                onClick={() => setCategoryType(category)}>{text}</li>
                        )
                    })}
                </ul>
                <div className='projects__items'>
                    {posts.map(project => {
                        const {id, image, type, title} = project
                        if (categoryType === type) {
                            return (
                                <Card data={project}/>
                            )
                        } else if (categoryType === 'all') {
                            return (
                                <Card data={project}/>
                            )
                        }
                    })}
                </div>
            </Container>
        </div>
    );
}

export default Projects;