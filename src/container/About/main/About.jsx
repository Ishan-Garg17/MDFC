import React from 'react'
import {motion} from 'framer-motion'
import './About.scss'
import AppWrap from '../../../wrapper/AppWrap'
import Heading from '../../../components/Heading'

import Enquiry from '../Enquiry'
import Aboutcontent from '../AboutContent/Aboutcontent'

const About = () => {
  console.log(window.scrollY)
  return (
    <div className='app__about'>
        <motion.div 
          whileInView={{ scale: [0,1], opacity: [0, 1] }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1
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

export default AppWrap(About,'Classes','about__special')