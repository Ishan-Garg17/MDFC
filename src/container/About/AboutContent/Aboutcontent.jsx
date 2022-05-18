import React from 'react'
import './Aboutcontent.scss'
import { motion } from 'framer-motion'
import Dropdownbox from '../Dropdownbox'
import images from '../../../assets/images'
import ContentCard from './ContentCard'
class Aboutcontent extends React.Component {

  constructor(){
    super();

    this.state = {
      imageURL: images.about01,
      title: '',
      content: ''
    }
  }

  contentInSection = (e)=> {
    var id = (e.target.id);

    if(id==1){

      this.setState({
        title: 'We have Different Classes for all the Age-Groups.',
        content: ['Creative Movements Junior (1.5 years - 2.5 years)','Creative Movements Senior (3 years - 5 years)','Kids Dance a Gymnastics (6 years - 10 years)','Teens a Adults Dance a Gymnastics ( 10+ years and above)','Senior Citizens Dance a Fitness (45+ years and above)']
      })
      

    }



  }
  // 
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
                      <button id='1' onClick={this.contentInSection}>
                        <div  id='1'>
                          <h3 id='1'>
                            5+ Different
                          </h3>
                          <span id='1'>
                              Categories
                          </span>
                        </div>
                      </button>
                      
                      <button id='2'  onClick={this.contentInSection}>
                        <div id='2'>
                          <h3>
                            Corporate
                          </h3>
                          <span>
                              Choreography
                          </span>
                        </div>
                      </button>
                      
                      <button id='3' onClick={this.contentInSection} >
                        <div  id='3'>
                          <h3  id='3'>
                            Wedding
                          </h3>
                          <span  id='3'>
                          Choreography
                          </span>
                        </div>
                      </button>
                      
                      <button id='4' onClick={this.contentInSection}>
                        <div id='4'>
                          <h3 id='4'>
                            Competition
                          </h3>
                          <span id='4'>
                            Training
                          </span>
                        </div>
                      </button>
                      
                      <button id='5' onClick={this.contentInSection}>
                        <div id='5'>
                          <h3 id='5'>
                            Kids Summer
                          </h3>
                          <span id='5'>
                              Camp
                          </span>
                        </div>
                      </button>
                      
                      <button id='6' onClick={this.contentInSection}>
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

              <Dropdownbox contentInSection={this.contentInSection}/>
              
          </div>
  
  
          <div className="carousell ">
                  <ContentCard title={this.state.title} content={this.state.content} imageURL={this.state.imageURL}/>
          </div>
                
      </motion.div>
  
               
  
    )
  }
}

export default Aboutcontent;