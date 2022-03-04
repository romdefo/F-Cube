import React from "react";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default function CarouselComponent() {
    const sliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
    }
    return (
          <Slider {...sliderSettings}>
              
          </Slider>
    );
}