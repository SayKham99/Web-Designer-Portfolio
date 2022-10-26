import React, {useState} from 'react';
import Container from "../../usable/Container/Container";
import './contactHeader.scss'
import Button from "../../usable/button/button";

const ican = [{
    id: 1,
    title: 'Motion Graphics.',
    description: 'From small teasers, to explainers, to full storytelling experiences, I will help you move ideas around.'
}, {
    id: 2,
    title: 'Animated Interactions.',
    description: 'UX is only complete with engaging animations. These are great for showcase or to guide a dev team.'
}, {
    id: 3,
    title: 'Webflow Development.',
    description: 'Bringing visual design, animation and development together to uplift your digital presence.'
}, {
    id: 4,
    title: 'Education.',
    description: 'If you have a team ready to dive into the world of Motion Graphics, I would be delighted to help.'
},]

function ContactHeader() {
    let [isSend, setIsSend] = useState(true)
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [type, setType] = useState('')
    let [time, setTime] = useState('')
    let [text, setText] = useState('')
    const Send = (e) => {
        setTimeout(() => {
            setIsSend(false)
        }, 3000)
    };
    return (<div className='contactHeader'>
        <Container className={'-xs'}>
            <div className='contactHeader__wrapper-item'>
                <div className='contactHeader__wrapper-item--text'>
                    <h1 className='contactHeader__wrapper-item--text-title'>Let’s find solutions <span>together?</span>
                    </h1>
                    <p className='contactHeader__wrapper-item--text-type'>Contact</p>
                    <p className='contactHeader__wrapper-item--text-descr'>Fill in the form or just use my contacts
                        below. If you need to put a project on the move, let’s work on it!</p>
                    <a className='contactHeader__wrapper-item--text-link'
                       href="mailto:example@example.com">example@example.com</a>
                </div>
                <div className='contactHeader__wrapper-item--form'>
                    {isSend ?
                        <form className='contactHeader__form'>
                            <div className='contactHeader__form-input'>
                                <label htmlFor="name">Name</label>
                                <input onfocusout={e=>setName(e.target.value)} onMouseLeave={e=>setName(e.target.value)} id='name' type="text" placeholder={'Enter your name'}/>
                            </div>
                            <div className='contactHeader__form-input'>
                                <label htmlFor="email">Email</label>
                                <input onfocusout={e=>setEmail(e.target.value)} onMouseLeave={e=>setEmail(e.target.value)} id='email' type="email" placeholder='Enter your email'/>
                            </div>
                            <div className='contactHeader__form-select'>
                                <label htmlFor="can">What can I help you with?</label>
                                <select id='can' onChange={(e) => setType(e.target.value)}>
                                    <option value="">Select one</option>
                                    {ican.map(can => (
                                        <option value={can.title}>{can.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='contactHeader__form-select'>
                                <label htmlFor="time">Do you have a defined timeframe?</label>
                                <select id='time' onChange={e=>setTime(e.target.value)}>
                                    <option value="">Select one</option>
                                    <option value="2-4 weeks">2-4 weeks</option>
                                    <option value="1-2 months">1-2 months</option>
                                    <option value="more than 2 months">more than 2 months</option>
                                </select>
                            </div>
                            <div className='contactHeader__form-area'>
                                <label htmlFor="area">Email</label>
                                <textarea onfocusout={e=>setText(e.target.value)} onMouseLeave={e=>setText(e.target.value)} rows={5} maxLength={500} id='area' placeholder='Enter your email'/>
                            </div>
                            <Button onClick={(e) => Send(e)} children={'Submit Form'}/>
                        </form>
                        : <div className='response'>
                            <h1 className='response__title'>Thank you!</h1>
                            <p className='response__descr'>Your submisson has been recieved!</p>
                        </div>}
                </div>
            </div>
        </Container>
    </div>);
}

export default ContactHeader;