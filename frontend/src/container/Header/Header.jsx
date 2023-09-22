import React from 'react';

import './Header.scss';
import { images } from '../../constants';
import {motion} from 'framer-motion';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div whileInView={{x: [-100, 0], opacity: [0,1]}}
      transition={{duration: 0.8 }}
      className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>
              🤖
            </span>
            <div style={{marginLeft:20}}>
              <p className="p-text"> Welcome, my name is</p>
              <h1 className="head-text">Dmitry Smirnov</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text"> Software Developer, </p>

            <p className="p-text"> Always Learning about new Tech!</p>
          </div>
        </div>
      </motion.div>

      <motion.div whileInView={{ opacity: [0,1]}}
      transition={{duration: 0.8, delayChildren: 0.5 }}
      className="app__header-img">
        <div className="circular-mask">
          <img src={images.profile} alt="profile_bg" className="circular--portrait"/>
        </div>
        <motion.img whileInView={{ scale: [0,1]}}
        transition={{duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"/>
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles">
        {[images.api, images.css, images.html].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header;