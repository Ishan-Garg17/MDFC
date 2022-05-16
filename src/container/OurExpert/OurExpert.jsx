import React from "react";
import "./OurExpert.scss";
import Heading from "../../components/Heading";
import AppWrap from "../../wrapper/AppWrap";
import images from '../../assets/images'
import { motion } from "framer-motion";

const OurExpert = () => {
  return (
    <div className="app__experts">
      <Heading title="MEET THE BEST" heading="Our Experts" />

      <motion.div 
      whileInView={{opacity: [0, 1] }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 2
      }}
      className="expert_content">

        <div className="main_image">

            <img src={images.himanshu} alt="" />
          

          </div>
        
          <div className="content">
            <p>
            Dancing for more than 15 years now and teaching for more than 12 years, Himanshu Bundela - the founder of MDFC believes to inspire, guide and help the next generation to enhance their talent and pave their way to success.
            Professionally trained from leading dance schools of Delhi such as Central  Contemporary Ballet, Big Dance Centre and Delhi Dance Academy Himanshu   specialises in the following dance forms: Contemporary, Ballet, Jazz,   Gymnastics, Hip Hop, Bollywood, Bhangra, Salsa, B-boying.

            </p>
          </div>
        
      </motion.div>

      <motion.div 
      whileInView={{opacity: [0, 1] }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1.5
      }}
      
      className="expert_points">
        <ul>
          <li>
          An expert &amp; specialized trainer at using creative movements for toddlers as young as
          1.5 years. (The only trainer in Delhi &amp; Gurgaon which teaches specialised dance to toddlers
          in Gurgaon)

          </li>
          <br />
          <li>
          A special needs dance trainer training kids with autism, down syndrome etc. (The
          only special needs dance trainer in Delhi &amp; Gurgaon)

          </li>
          <br />
          <li>
          A certified &amp; professional gymnastics trainer

          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AppWrap(OurExpert, "our_expert", "expert__special");
