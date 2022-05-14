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
              <Heading heading='MDFC' title='Welcome To'/>         
              <Aboutcontent/>
          </div>
    </div>
   
  )
}

export default AppWrap(About,'about','about__special')