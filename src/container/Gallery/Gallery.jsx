import React from "react";
import Heading from "../../components/Heading";
import images from "../../assets/images";
import './Gallery.scss'
import AppWrap from "../../wrapper/AppWrap";


const Gallery = () => {
  return (
    <>
      <Heading title="" heading="Gallery" />
      <div className="main_container">
        
        <div className="image">
          <img src={images.about04} alt="" />
        </div>

        <div className="image">
          <img src={images.about04} alt="" />
        </div>

        <div className="image">
          <img src={images.about04} alt="" />
        </div>

        <div className="image">
          <img src={images.about04} alt="" />
        </div>

        <div className="image">
          <img src={images.about04} alt="" />
        </div>
      </div>
    </>
  );
};

export default AppWrap(Gallery, "gallery");