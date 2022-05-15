import React from 'react'
import './Footer.scss'

import images from '../../assets/images'
import Heading from '../../components/Heading'
import {BsTelephoneInboundFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {GrMail} from 'react-icons/gr'
import SocialMedia from '../../components/SocialMedia'



const Footer = () => {
  return (
    <div className='app__footer'>

      <div className=" contact__us">
          <Heading title='Any Question' heading='CONTACT US'  footer='footer__special'  />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.   Laboriosam deleniti tenetur repudiandae totam reiciendis sed  illo molestias, iste,</p>
      </div>

      <div className=" map">
        <div className="google__map">
        </div>
      </div>

      <div className=" contact__info">
        
        <div className="logo">
          <img src={images.footer_logo} alt="" />
        </div>

        <div className="contact">

            <div className="contact_icon">
                <HiLocationMarker/>
                <span>Plot 521, (Basement) Sector 45, Gurugram, Haryana 122003</span>
            </div>

            <div className="contact_icon">
                <BsTelephoneInboundFill/>
                <span>+91 9871497596</span>
            </div> 
            
            <div className="contact_icon">
              <GrMail/>
                <span>mdfcgurgaon@gmail.com</span>

            </div> 

        </div>

        <div className="social_media">

          <SocialMedia/>


        </div>
      </div>
    

    </div>
  )
}

export default Footer