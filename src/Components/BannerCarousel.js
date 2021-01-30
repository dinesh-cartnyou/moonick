import React, { Fragment } from 'react';
import { BannerCard } from './BannerCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

export const BannerCarousel = ({data}) => {
  let settings = {
    dot: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'liner'
  };

  return (
    <Fragment>
      <div className='productslder'>
        <Slider {...settings}>
          {
            // data && data.length > 0 && data.map(banner => {
            //   return(
                <BannerCard ></BannerCard>
              // )
            // }) 
          }          
        </Slider>
      </div>
    </Fragment>
  );
};

BannerCarousel.propTypes = {
  data: PropTypes.array
}