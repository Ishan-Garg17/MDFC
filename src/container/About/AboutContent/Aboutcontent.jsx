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
      title: 'We have Different Classes for all the Age-Groups.',
      content: ['Creative Movements Junior (1.5 years - 2.5 years)','Creative Movements Senior (3 years - 5 years)','Kids Dance a Gymnastics (6 years - 10 years)','Teens a Adults Dance a Gymnastics ( 10+ years and above)','Senior Citizens Dance a Fitness (45+ years and above)'],
      specialClass: ''
    }
  }

  contentInSection = (e)=> {
    var id = (e.target.id);

    if(id==='1'){

      this.setState({
        imageURL: images.about01,
        title: 'We have Different Classes for all the Age-Groups.',
        content: ['Creative Movements Junior (1.5 years - 2.5 years)','Creative Movements Senior (3 years - 5 years)','Kids Dance a Gymnastics (6 years - 10 years)','Teens a Adults Dance a Gymnastics ( 10+ years and above)','Senior Citizens Dance a Fitness (45+ years and above)'],
        specialClass: ''
      })
    }
    
    else if(id==='2'){

      this.setState({
        imageURL: images.about02,
        title: 'Corporate Choreography',
        content: ['Amazon','Key sight','Analec infotech','Wunderman','K & S partners', 
        'Amar Jain Clothing', 'WWF','IIT', 'Russian Embassy', 'Raahgiri',   'American Embassy'],
        specialClass: 'reduceWidth'
      })
      
    }    
    
    else if(id==='3'){

      this.setState({
        imageURL: images.about03,
        title: 'Wedding Choreography',
        content: 'Marriages are made in heaven, but they are celebrated on Earth! Wedding dance choreography differs dramatically from other types of dance choreography. Its not about the choreographer teaching you and your troupe what they know; it is all about what you and your group can learn in a short amount of time. So, whether you are a seasoned dancer or a beginner, MDFC will make sure that everyone is on the same page by adjusting to the time and talent levels available to create a unique dance programme.',
        specialClass: ''
      //
      })
    }   
    
    else if(id==='4'){

      this.setState({
        imageURL: images.about04,
        title: 'Training for various competitions',
        content: 'Dance competitions may be a fun and educational experience for kids of all ages. It gives numerous benefits that kids would not gain if they went to a non-competitive dance school. Whether it is your 1st competition or 50th,  MDFC gives the ideal platform for training and upskilling yourself with our qualified and experienced specialists.',
       specialClass: ''
      })
      
    }

    // else if(id==='5'){

    //   this.setState({
    //     imageURL: images.about05,
    //     title: 'Special Classes for Kids during Summers',
    //     content: 'lorem ipsum donor lorem ipsum donor lorem ipsum donor',
    //     specialClass: ''
    //   })
    // }

    // else if(id==='6'){

    //   this.setState({
    //     imageURL: images.about06,
    //     title: 'Special Classes for Kids during Winters',
    //     content: 'lorem ipsum donor lorem ipsum donor lorem ipsum donor',
    //     specialClass: ''
    //   })

    // }
    
    else if(id==='5'){

      this.setState({
        imageURL: '',
        title: 'There’s no stronger way to believe something than to experience it.',
        content: ['MDFC has always been focussed towards that ‘Emotional Quotient’ of clients’ expectations and strived to achieve brilliance and perfection in every experience that we create.', 'MDFC was born out of zeal to create a true client-centric agency who could quickly turn around clients’ needs into action plans. Dancing Fitness are great ways to meet people in a non-threatening, relaxed social atmosphere. And MDFC provides the same.', 'With its headquarters in Gurgaon, this premium dance academy boasts of a plethora of dance and fitness services under the tutelage of highly trained and passionate instructors. The academy offers beginners and advanced dance instruction as well as high level competition training in various dance forms such as contemporary, jazz, hip hop, salsa, bollywood, gymnastics, zumba, acrobats and yoga. The brand also boasts of a gamut of professionally trained dancers, performers  & instructors who are well equipped to make dancing a fun affair for anyone. Adding to our repertoire MDFC also specializes in organizing workshops & activities at corporates all across Delhi NCR. Like most other dance academies, MDFC studio displays state of the art interiors which include wooden flooring, full mirror coverage, high end sound system and is also well equipped with CCTV cameras. The brand which strongly believes in the motto; Give wings to your dreams, helps you let go of your inhibitions, push your limits and express yourself. And it is this warmth displayed by the MDFC family which attracts students from all age groups and diverse cultures. From a 3 year old student to a 60+ year old student, from Indian students to students who have come from other countries, MDFC is proud of training such a wide variety of students across all genres.'],
        specialClass: 'about_mdfc'
      })

    }



  }
  // 
  render() {
    return (
      <motion.div
      whileInView={{opacity: [0, 1] }}
      transition={{
        type: "spring",
        stiffness: 10,
        damping: 10,
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
                          Know More 
                          </h3>
                          <span id='5'>
                          About Us
                          </span>
                        </div>
                      </button>

                  </div>
                  <br />
                  {/* <button id='7' onClick={this.contentInSection} className='about__button'>About Us</button> */}
              </div>

              <Dropdownbox contentInSection={this.contentInSection}/>

          </div>
  
  
          <div className="carousell ">
                  <ContentCard title={this.state.title} content={this.state.content} imageURL={this.state.imageURL} specialClass={this.state.specialClass}/>
          </div>
                
      </motion.div>
  
               
  
    )
  }
}

export default Aboutcontent;