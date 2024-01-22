import React from 'react'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeels } from './TopMeels';
import CarouselItem from './CarouselItem';

const MultipleItemsCarousel = () => {
    
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,

        };
  return (
    <div>
        <Slider {...settings}>
            {topMeels.map((item)=> <CarouselItem image={item.image} title={item.title}/>)}
        </Slider>
    </div>
  )
}




export default MultipleItemsCarousel