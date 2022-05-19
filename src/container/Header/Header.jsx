import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import AppWrap from '../../wrapper/AppWrap';

const Header = () => (
  <>
    <motion.div
      whileInView={{ x: [-600,300], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="app__header-info"
    >
        <div className="badge-cmp app__flex">
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Every Pro was once a</p>
            <h1 className="head-text">beginner.</h1>
            <div className='info__line'>
                <div/>
                <span>Turn Yourself into a Pro!</span>
            </div>
          </div>
        </div>  
    </motion.div>
 </>
);

export default AppWrap(Header,'home','home_special')