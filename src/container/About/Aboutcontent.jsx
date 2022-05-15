import React from 'react'
import './Aboutcontent.scss'
import { motion } from 'framer-motion'
import Dropdownbox from './Dropdownbox'
import images from '../../assets/images'
class Aboutcontent extends React.Component {

  show = (anything)=>{
    let input= document.querySelector('.textBox').value;
    input.value=anything;
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
                      <button>
                        <div>
                          <h3>
                            5+ Different
                          </h3>
                          <span>
                              Categories
                          </span>
                        </div>
                      </button>
                      
                      <button>
                        <div>
                          <h3>
                            5+ Different
                          </h3>
                          <span>
                              Categories
                          </span>
                        </div>
                      </button>
                      
                      <button>
                        <div>
                          <h3>
                            5+ Different
                          </h3>
                          <span>
                              Categories
                          </span>
                        </div>
                      </button>
                      
                      <button>
                        <div>
                          <h3>
                            5+ Different
                          </h3>
                          <span>
                              Categories
                          </span>
                        </div>
                      </button>
                      
                      <button>
                        <div>
                          <h3>
                            5+ Different
                          </h3>
                          <span>
                              Categories
                          </span>
                        </div>
                      </button>
                      
                      <button>
                        <div>
                          <h3>
                            5+ Different
                          </h3>
                          <span>
                              Categories
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
  
              <div className="slider">
                  <section>
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
                  <section className='topa'>2 lorem lorem lorem lorem</section>
                  <section>3 lorem lorem lorem lorem</section>
                  <section>4 lorem lorem lorem lorem</section>
                  <section>5 lorem lorem lorem lorem</section>
                  <section>6 lorem lorem lorem lorem</section>
              </div>
  
          </div>
  
          
              
      </motion.div>
  
               
  
    )
  }
}

export default Aboutcontent;