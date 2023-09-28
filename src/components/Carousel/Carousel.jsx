import React from 'react'
import { runCarousel } from '../../services/carousel-service'

const Carousel = () => {
  runCarousel();
  return (
    <div>Carousel</div>
  )
}

export default Carousel