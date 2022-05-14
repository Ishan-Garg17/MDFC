import React from 'react'
import {motion} from 'framer-motion'
import './About.scss'
import images from '../../assets/images'
import AppWrap from '../../wrapper/AppWrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heading from '../../components/Heading'

import Enquiry from './Enquiry'
import Aboutcontent from './Aboutcontent'

AOS.init();

const About = () => {
  console.log(window.scrollY)
  return (
    <div className='app__about'>
        <motion.div 
         whileInView={{opacity: [0, 1] }}
         transition={{
           type: "spring",
           stiffness: 260,
           damping: 20
         }}
        className='about__form' >
        
          <Enquiry/>
        
        </motion.div>

          <div className='about__section'>
              <Heading heading='MDFC' title='Welcome To'/>         
              <Aboutcontent/>
          </div>
    </div>
   
  )
}

export default AppWrap(About,'about','about__special')