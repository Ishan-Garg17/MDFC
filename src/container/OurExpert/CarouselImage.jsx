import React from 'react'

import { Carousel } from 'react-bootstrap'
import images from '../../assets/images'

const CarouselImage = () => {
  return (
    <Carousel>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={images.himanshu3}
      alt="First slide"
    />
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={images.himanshu2}
      alt="Second slide"
    />
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={images.himanshu}
      alt="Third slide"
    />
  </Carousel.Item> 
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={images.himanshu4_1}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  )
}

export default CarouselImage;