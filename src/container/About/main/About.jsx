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
       <div className='about__form' >
                  
                  <Enquiry/>

        </div>

          <div className='about__section'>
              <Heading heading='MDFC' title='Welcome To'/>         
              <Aboutcontent/>
          </div>
    </div>
   
  )
}

export default AppWrap(About,'About Us','about__special')