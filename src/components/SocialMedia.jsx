import React from 'react'
import {BsInstagram,BsYoutube,BsWhatsapp} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';



const SocialMedia = ({specialClass}) => {
   
  return(
    <div className={specialClass}>
         <div>
        <a href="https://api.whatsapp.com/send?phone=+919871497596&text=Hello, I would like to chat">
            <BsWhatsapp />
            </a>
        </div>
        <div>
        <a href="https://www.instagram.com/mdfc_mydanceandfitnesscentre/">
            <BsInstagram />
            </a>
        </div>
         <div>
         <a href="https://www.facebook.com/mdfcgurgaon">
            <FaFacebookF />
            </a>
        </div> 
        <div>
        <a href="https://www.youtube.com/channel/UCRjBlqWTbsx36qg6o8wkVCw">
            <BsYoutube/>
            </a>
        </div>
    </div>
);
}


export default SocialMedia;