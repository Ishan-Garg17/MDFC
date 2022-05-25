import React from "react";
import "./OurExpert.scss";
import Heading from "../../components/Heading";
import AppWrap from "../../wrapper/AppWrap";
import { motion } from "framer-motion";
import CarouselImage from "./CarouselImage";

const OurExpert = () => {
  return (
    <div className="app__experts">
      <Heading title="MEET THE BEST" heading="Our Experts" />

      <div className="expert_content">

        <div className="main_image">
            <CarouselImage/>
        </div>
        
        <div className="content">
            <h1>Himanshu Bundela</h1>
            <p>
            Dancing for more than 15 years now and teaching for more than 12 years, Founder of MDFC believes to inspire, guide and help the next generation to enhance their talent and pave their way to success.
            Professionally trained from leading dance schools of Delhi such as Central  Contemporary Ballet, Big Dance Centre and Delhi Dance Academy Himanshu   specialises in the following dance forms: Contemporary, Ballet, Jazz,   Gymnastics, Hip Hop, Bollywood, Bhangra, Salsa, B-boying.
            </p>
        </div>
        
      </div>

      <div className="expert_points">

        <motion.div
        whileInView={{opacity: [0, 1] }}
        transition={{
          duration: 1.0
        }}>
            <h3>TODDLERS</h3>
            <h3>EXPERT</h3>
            <span>The only trainer in Delhi &amp; Gurgaon teaching kids as young as 1.5 years </span>
        </motion.div>
        <motion.div 
        whileInView={{opacity: [0, 1] }}
        transition={{
          duration: 1
        }}
        >
            <h3>SPECIAL NEEDS</h3>
            <h3>EXPERT</h3>
            <span>The only trainer in Delhi &amp; Gurgaon teaching kids with autism, down syndrome.</span>
        </motion.div>
        <motion.div
        whileInView={{opacity: [0, 1] }}
        transition={{
          duration: 1
        }}
        >
            <h3>GYMNASTICS</h3>
            <h3>EXPERT</h3>
            <span>A certified gymnastics trainer best suited for competition level trainer.</span>
        </motion.div>
        {/* <ul>
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
        </ul> */}
        
      </div>
    </div>
  );
};

export default AppWrap(OurExpert, "our_expert", "expert__special");
