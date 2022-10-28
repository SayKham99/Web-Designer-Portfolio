import {useState} from 'react';
import {Container} from "../../usable/Container/Container";
import './posts.scss'
import {motion} from "framer-motion";
import photo1 from '../../../assets/images/project1.jpg'
import photo2 from '../../../assets/images/project2.jpg'
import photo3 from '../../../assets/images/project3.jpg'
import {MCard} from "../../usable/card/card";

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

const textAnim = {
    hidden: {
        x: 100, opacity: 0,
    }, visible: custom => ({
        x: 0, opacity: 1, transition: {delay: custom * 0.2}
    })
}

const cardAnim = {
    hidden: {
        y: 100, opacity: 0,
    }, visible: custom => ({
        y: 0, opacity: 1, transition: {delay: custom * .5}, duration: .7
    })
}

function Projects() {

    const [categoryType, setCategoryType] = useState('all')

    return (
        <motion.div
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{amount: 0.1, once: true}}
            className='posts'
        >
            <Container className={'-xs'}>
                <ul className='posts__types'>
                    {types.map(type => {
                        const {id, category, text} = type;
                        return (
                            <motion.li
                                variants={textAnim}
                                custom={id}
                                id={id}
                                className={`posts__types-type${categoryType === category ? '--active' : ''}`}
                                onClick={() => setCategoryType(category)}
                            >
                                {text}
                            </motion.li>
                        )
                    })}
                </ul>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{amount: 0.2, once: true}}
                    className='posts__items'
                >
                    {posts.map(project => {
                        const {id, image, type, title} = project
                        if (categoryType === type) {
                            return (
                                <MCard key={id} variants={cardAnim} custom={id + 1} data={project}/>
                            )
                        } else if (categoryType === 'all') {
                            return (
                                <MCard key={id} variants={cardAnim} custom={id + 1} data={project}/>
                            )
                        }
                    })}
                </motion.div>
            </Container>
        </motion.div>
    );
}

export default Projects;