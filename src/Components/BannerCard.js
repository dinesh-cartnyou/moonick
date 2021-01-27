import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const BannerCard = ({imageUrl,id}) => {
  return (
    <Fragment>
      <div id={id} className='swiper-slide'>
        <img src={imageUrl || 'image/home/banner.jpg'} className='img-fluid' />
      </div>
    </Fragment>
  );
};

BannerCard.propTypes = {
  data: PropTypes.string
};
