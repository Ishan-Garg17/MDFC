import React from 'react'
import './Aboutcontent.scss'
import { motion } from 'framer-motion'
import Dropdown from './Dropdown'

class Aboutcontent extends React.Component {

  show = (anything)=>{
    let input= document.querySelector('.textBox').value;
    input.value=anything;
 }


  render() {
    return (
      <motion.div
      // whileInView={{ scale: [0,1], opacity: [0, 1] }}
      // transition={{
      //   type: "spring",
      //   stiffness: 260,
      //   damping: 20
      // }}
      className='about__content'>
  
          <div className='controllers'>
          
              <div className="main__controller">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              </div>
          <button>About US</button>
  
          </div>
  
  
          <div className="carousel">
  
              <div className="slider">
                  <section>1 lorem lorem lorem lorem</section>
                  <section className='tota'>2 lorem lorem lorem lorem</section>
                  <section>3 lorem lorem lorem lorem</section>
                  <section>4 lorem lorem lorem lorem</section>
                  <section>5 lorem lorem lorem lorem</section>
                  <section>6 lorem lorem lorem lorem</section>
              </div>
  
          </div>
  
          <Dropdown show={this.show}/>
              
      </motion.div>
  
               
  
    )
  }
}

export default Aboutcontent;