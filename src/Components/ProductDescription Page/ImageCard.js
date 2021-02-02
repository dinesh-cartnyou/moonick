import React, { Fragment } from 'react';

export const ImageCard = (props) => {
  return (
    <Fragment>
      <div className='swiper-slide'>
        <div className='brandbox'>
          <img src={'https://images.bewakoof.com/t540/grey-camo-half-sleeve-camo-t-shirt-men-s-plain-half-sleeve-camo-t-shirt-277507-1605183058.jpg' || 'image/home/flash/img1.png'} className='img-fluid' onClick={props.handleShow} />
        </div>
      </div>
    </Fragment>
  );
};
