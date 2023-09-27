import {React, useState} from 'react'
import { images } from '../../constants';
import {motion} from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Footer.scss'

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const {name,value} = e.target;
    
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: email,
      message: message,
    }

    client.create(contact).then(()=> {
      setLoading(false);
      setIsFormSubmitted(true);
    })

  }


  return (
    <>
      <h2 className="head-text">Schedule a Coffee Chat With Me</h2>
      <div className="app__footer-cards">
        <a href="https://www.linkedin.com/in/dmsmirno/" >
          <div href="https://www.linkedin.com/in/dmsmirno/" className="app__footer-card">
            <img src={images.linkedIn} alt="email" />
            <a className="p-text">Contact Me</a>
          </div>
        </a>
      </div>
      {!isFormSubmitted ?
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleChangeInput} />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'} </button>
        </div>
      : 
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');