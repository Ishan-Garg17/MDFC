import React from 'react'
import './Aboutcontent.scss'
import { motion } from 'framer-motion'

const Aboutcontent = () => {
  return (
    <motion.div
    whileInView={{ scale: [0,1], opacity: [0, 1] }}
    // initial={{ scale: 0 }}
    // animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    className='about__content'>
         <h3>MAIN CONTENT</h3>
            
    </motion.div>

             

  )
}

export default Aboutcontent