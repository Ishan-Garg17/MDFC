import React from 'react'
import {motion} from 'framer-motion'
import './About.scss'
import images from '../../assets/images'

const about = [
  {title: 'Full Stack Developer',description: 'I am a good web Developer',imageURL:`${images.about01}`},
  {title: 'Video Editor',description: 'I am a good web Developer',imageURL:`${images.about02}`},
  {title: 'Graphic Designing',description: 'I am a good web Developer',imageURL:`${images.about03}`}
  // {title: '',description: 'I am a good web Developer',imageURL:`${images.about04}`}
]

const About = () => {
  return (
    <div className='app__about'>
      <h2 className='head-text about_text'>
        I Know that   <span>
        Good Products
        </span>
        <br />
        means <span>Good Business</span>
      </h2>

    <div className='app__profiles'>

      {about.map((item,index)=>(
         <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >

                <img src={(item.imageURL)} alt={item.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>{item.title}</h2>
                <p className="p-text" style={{ marginTop: 10 }}>{item.description}</p>
         
         </motion.div>

      ))}

    </div>
   

    </div>
  )
}

export default About