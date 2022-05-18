import React from 'react'
import {BsInstagram,BsYoutube} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';



const SocialMedia = () => {
   
  return(
    <div className='app__social'>
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