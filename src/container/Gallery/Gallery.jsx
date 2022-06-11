import React from "react";
import Heading from "../../components/Heading";
import images from "../../assets/images";
import "./Gallery.scss";
import { Carousel } from "react-bootstrap";
import AppWrap from "../../wrapper/AppWrap";

const Gallery = () => {
  return (
    <>
      <Heading title="" heading="Gallery" />
     
      <div className="main_container">
        <div className="image">
          <img src={images.gallery01} alt="" />
        </div>

        <div className="image">
          <img src={images.gallery02} alt="" />
        </div>

        <div className="image">
          <img src={images.gallery03} alt="" />
        </div>

        <div className="image">
          <img src={images.gallery04} alt="" />
        </div>
        
        <div className="image">
          <img src={images.about01} alt="" />
        </div>
        
        <div className="image">
          <img src={images.gallery06} alt="" />
        </div>
        
        <div className="image">
          <img src={images.gallery07} alt="" />
        </div>
{/*         
        <div className="image">
          <img src={images.gallery04} alt="" />
        </div> */}

      </div>


      <Carousel className="gallery">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.about03}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.about01}
            alt="Second slide"
          />

        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.about04}
            alt="Third slide"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.about05}
            alt="Third slide"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.about04}
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>


    </>
  );
};

export default AppWrap(Gallery, "gallery","gallery_special");
