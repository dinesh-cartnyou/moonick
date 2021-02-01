import React, { Fragment } from 'react';
import { BannerCard } from './BannerCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

export const BannerCarousel = ({ data }) => {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'liner'
  };

  const images = [
    {
      imageUrl: 'https://images.bewakoof.com/uploads/grid/app/new-year-hero-banner-men-1610113197.jpg',
      id: '1'
    },
    {
      imageUrl: 'https://images.bewakoof.com/uploads/grid/app/bewakoof-fotm-fabric-of-the-month-melange-online-fashion-shopping-hero-men-1610715464.jpg',
      id: '2'
    },
    {
      imageUrl: 'https://images.bewakoof.com/uploads/grid/app/bewakoof-collab-fanathon-online-shopping-msite-hero-banner-1609334231.jpg',
      id: '3'
    },
    {
      imageUrl: 'https://images.bewakoof.com/uploads/grid/app/bewakoof-dc-comics-online-fashion-shopping-men-hero-carousel-1604997797.jpg',
      id: '4'
    },
    {
      imageUrl: 'https://images.bewakoof.com/uploads/grid/app/bewakoof-men-day-collection-online-fashion-shopping-hero-banner-1605103600.jpg',
      id: '5'
    }
  ];

  return (
    <Fragment>
      <div className='productslder'>
        <Slider {...settings}>
          {/* <BannerCard images={images}></BannerCard> */}
          <BannerCard image={'https://images.bewakoof.com/uploads/grid/app/bewakoof-men-day-collection-online-fashion-shopping-hero-banner-1605103600.jpg'}></BannerCard>
          <BannerCard image={'https://images.bewakoof.com/uploads/grid/app/bewakoof-men-day-collection-online-fashion-shopping-hero-banner-1605103600.jpg'}></BannerCard>
          <BannerCard image={'https://images.bewakoof.com/uploads/grid/app/bewakoof-men-day-collection-online-fashion-shopping-hero-banner-1605103600.jpg'}></BannerCard>
          <BannerCard image={'https://images.bewakoof.com/uploads/grid/app/bewakoof-men-day-collection-online-fashion-shopping-hero-banner-1605103600.jpg'}></BannerCard>
          {/* {
            isNotEmptyArray(images) && images.map((image,imageIndex) => {
              <BannerCard imageUrl={images}></BannerCard>
            })

          } */}
          {
            // data && data.length > 0 && data.map(banner => {
            //   return(

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