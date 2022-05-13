import React from 'react'
import {motion} from 'framer-motion'
import './About.scss'
import images from '../../assets/images'
import AppWrap from '../../wrapper/AppWrap'

const about = [
  {title: 'Full Stack Developer',description: 'I am a good web Developer',imageURL:`${images.about01}`},
  {title: 'Video Editor',description: 'I am a good web Developer',imageURL:`${images.about02}`},
  {title: 'Graphic Designing',description: 'I am a good web Developer',imageURL:`${images.about03}`}
  // {title: '',description: 'I am a good web Developer',imageURL:`${images.about04}`}
]

const About = () => {
  return (
    <div className='app__about'>
       
         <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >

             
         </motion.div>

    </div>
   
  )
}

export default AppWrap(About,'about','section')