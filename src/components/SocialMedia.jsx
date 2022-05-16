import React from 'react'
import {BsInstagram,BsYoutube} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';



const SocialMedia = () => {
   
  return(
    <div className='app__social'>
        <div>
        <a>
            <BsInstagram />
            </a>
        </div>
         <div>
         <a href="http://twitter.com">
            <FaFacebookF />
            </a>
        </div> 
        <div>
        <a href="http://twitter.com">
            <BsYoutube/>
            </a>
        </div>
    </div>
);
}


export default SocialMedia;