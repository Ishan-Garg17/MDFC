import React from 'react'
import {motion} from 'framer-motion'
import './About.scss'
import images from '../../assets/images'
import AppWrap from '../../wrapper/AppWrap'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Enquiry from './Enquiry'

AOS.init();

const About = () => {
  console.log(window.scrollY)
  return (
    <div className='app__about'>
          <div className='about__form' data-aos="fade-in"
    data-aos-offset="100"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
              <Enquiry/>
          </div>

          <div className='about__section'>
              
              <div className='app__heading'>
                <h1>Heading</h1>
              </div>

              <div className='about__content'>
                <h3>MAIN CONTENT</h3>
              </div>

          </div>

         {/* <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            
             
         </motion.div> */}

    </div>
   
  )
}

export default AppWrap(About,'about','about__special')