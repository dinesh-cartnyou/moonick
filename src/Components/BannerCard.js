import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { isNotEmptyArray } from '../utils/global-functions';

export const BannerCard = ({ imageUrl, id, images, image }) => {
  return (
    <div className='outer-div-slider'>
      {/* {
        isNotEmptyArray(images) && images.map((image) => {
          return (
            <div id={image.id} className='swiper-slider inner-swiper-slider W-100'>
              <img src={image.imageUrl || 'image/home/banner.jpg'} className='img-fluid W-100' />
            </div>
          )
        })
      } */}
      {
        <div id={'id' || image.id} className='swiper-slider inner-swiper-slider W-100'>
          <img src={image || image.imageUrl || 'image/home/banner.jpg'} className='img-fluid W-100' />
        </div>
      }
    </div>
  );
};

BannerCard.propTypes = {
  images: PropTypes.array
};
