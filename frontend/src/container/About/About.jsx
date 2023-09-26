import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants'

import {urlFor, client } from '../../client';

import './About.scss'

const stockAbouts = [
  {title: 'Full Stack Development', description: 'I am always learning web development!', imgUrl:images.about1},
  {title: 'AI/ML', description: 'I extremely excited about cutting edge tech in the field of Artificial Intelligence!', imgUrl:images.about2},
  {title: 'Learning on The Job', description: 'In the past year I have hunted actively for career improvement and opportunity to do more at work.', imgUrl:images.about3},
  {title: 'Learning in The Classroom', description: 'Seeing how rapidly the tech industry is changing, I embarked on my journey for getting an MS CS Degree.', imgUrl:images.about4},
];

const About = () => {

  const [abouts, setAbouts] = useState([]);

  const [sanity, setSanity] = useState(false);
  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query)
      .then((data) => {
        setAbouts(data);
        if(data.length == 0) {
          setAbouts(stockAbouts);
          return; 
        }
        setSanity(true);
      })
  }, []);
  

  return (
    <>
      <h2 className="head-text"> Here is Where I
        <span> Learn</span>
        <br/>
        through
        <span> Doing!</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about,index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index} >
              <img src={sanity == false ? about.imgUrl : urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{marginTop: 20 }}> {about.title} </h2>
              <p className="p-text" style={{marginTop: 10 }}> {about.description} </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About;