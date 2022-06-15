import React from 'react'

import { Carousel } from 'react-bootstrap'
import images from '../../assets/images'

const CarouselImage = () => {
  return (
    <Carousel>
  
  <Carousel.Item interval={2200}>
    <img
      className="d-block w-100"
      src={images.himanshu3}
      alt="First slide"
    />
  </Carousel.Item>
  
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={images.himanshu2}
      alt="Second slide"
    />
  </Carousel.Item>
  
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={images.himanshu}
      alt="Third slide"
    />
  </Carousel.Item> 
  
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={images.himanshu5}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  )
}

export default CarouselImage;