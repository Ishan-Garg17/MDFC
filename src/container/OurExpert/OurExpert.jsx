import React from 'react'
import './OurExpert.scss'
import Heading from '../../components/Heading'
import AppWrap from '../../wrapper/AppWrap'

const OurExpert = () => {
  return (
    <div className='app__experts'>
      <Heading title='MEET THE BEST' heading='Our Experts'/>
      <div className="experts_content">

        <div className="main_image">
          <div className="expert_image">
          </div>
          <div className="expert_content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi sed quisquam nam exercitationem esse placeat fuga omnis tenetur quia eum deserunt, voluptas enim temporibus aspernatur officiis officia ipsa itaque ea repellat.</p>
          </div>
        </div>

        <div className="expert_points">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, iste!</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, iste!</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, iste!</li>
            </ul>
        </div>

          
      </div>


    </div>
  )
}

export default AppWrap(OurExpert,'our_expert','expert__special')