import React from 'react'
import './Aboutcontent.scss'
import { motion } from 'framer-motion'
import Dropdownbox from '../Dropdownbox'
import images from '../../../assets/images'
class Aboutcontent extends React.Component {

  constructor(){
    super();

    this.state = {
      
    }
  }


  render() {
    return (
      <motion.div
      whileInView={{ scale: [0,1], opacity: [0, 1] }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1
      }}
      className='about__content'>
  
          <div className='controllers'>

              <div className="main__controller">
                  <div className="buttons">
                      <button id='1' >
                        <div  id='1'>
                          <h3 id='1'>
                            5+ Different
                          </h3>
                          <span id='1'>
                              Categories
                          </span>
                        </div>
                      </button>
                      
                      <button id='2' >
                        <div id='2'>
                          <h3>
                            Corporate
                          </h3>
                          <span>
                              Choreography
                          </span>
                        </div>
                      </button>
                      
                      <button id='3' >
                        <div  id='3'>
                          <h3  id='3'>
                            Wedding
                          </h3>
                          <span  id='3'>
                          Choreography
                          </span>
                        </div>
                      </button>
                      
                      <button id='4' >
                        <div id='4'>
                          <h3 id='4'>
                            Competition
                          </h3>
                          <span id='4'>
                            Training
                          </span>
                        </div>
                      </button>
                      
                      <button id='5' >
                        <div id='5'>
                          <h3 id='5'>
                            Kids Summer
                          </h3>
                          <span id='5'>
                              Camp
                          </span>
                        </div>
                      </button>
                      
                      <button id='6' >
                        <div id='6'>
                          <h3 id='6'>
                          Kids Winter
                          </h3>
                          <span id='6'>
                          Camp
                          </span>
                        </div>
                      </button>

                  </div>
                  <br />
                  <button className='about__button'>About Us</button>
              </div>
              <Dropdownbox/>
          </div>
  
  
          <div className="carousel">

                  <section id='section-1'>
                    
                    <div className="section__image">
                        <img src={images.about01} alt="" />
                    </div>
                    <div className="section__content section_1">
                       <p>We have Different Classes for all the Age-Groups.</p>
                        <ul className='content__list'>
                          <li>Creative Movements Junior (1.5 years - 2.5 years) </li>
                          <li>Creative Movements Senior (3 years - 5 years)  </li>
                          <li>Kids Dance a Gymnastics (6 years - 10 years) </li>
                          <li>Teens a Adults Dance a Gymnastics ( 10+ years and above)  </li>
                          <li>Senior Citizens Dance a Fitness (45+ years and above)  </li>
                        </ul>
                    </div>

                  </section>
                  
          </div>
                
      </motion.div>
  
               
  
    )
  }
}

export default Aboutcontent;