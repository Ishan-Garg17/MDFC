import React from 'react'
import './Footer.scss'

import images from '../../assets/images'
import Heading from '../../components/Heading'
import {BsTelephoneInboundFill} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {GrMail} from 'react-icons/gr'
import SocialMedia from '../../components/SocialMedia'



const Footer = ({redirect}) => {

   return (
    <div className='app__footer'>

      <div className=" contact__us">
          <Heading title='Any Question' heading='CONTACT US'  footer='footer__special'  />
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.  Laboriosam deleniti tenetur repudiandae totam reiciendis sed  illo molestias, iste,Lorem ipsum dolor sit amet consectetur adipisicing elit.  Laboriosam deleniti tenetur repudiandae totam reiciendis sed  illo molestias, iste,</p>
      </div>

      <div className=" map">
        <div className="google__map">
        
        <iframe title='embedded_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.214322819631!2d77.06749131507833!3d28.442954982492935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18c29e09556f%3A0xa7521f38fa1d43cd!2sMDFC%20My%20Dance%20And%20Fitness%20Centre-!5e0!3m2!1sen!2sin!4v1652676148862!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}}></iframe>
        
        </div>
        <a onClick={()=>redirect}>REACH US DIRECTLY</a>
      </div>

      <div className=" contact__info">
          
        <div className="logo">
          <img src={images.footer_logo} alt="" />
        </div>

        <div className="contact">

            <div className="contact_icon location__info">
                <ImLocation size={32}/>
                <a href='https://www.google.com/maps/dir//MDFC+My+Dance+And+Fitness+Centre-,+plot+521,+Sector+45,+Gurugram,+Haryana+122003/@28.443323,77.069427,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d18c29e09556f:0xa7521f38fa1d43cd!2m2!1d77.06968!2d28.442955!3e0?hl=en'>Plot 521, (Basement) Sector 45, Gurugram, Haryana 122003</a>
            </div>

            <div className="contact_icon phoneNumber">
                <BsTelephoneInboundFill/>
                <a href="tel:+91-98714-97596">+91 9871497596</a>
            </div> 
            
            <div className="contact_icon mail__id">
              <GrMail/>
                <a href='mailto:mdfcgurgaon@gmail.com'>mdfcgurgaon@gmail.com</a>

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