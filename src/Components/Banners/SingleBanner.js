import React from 'react';

export const SingleBanner = () => {
  return (
    <div className='offer'>
      <div className='row no-gutters'>
        <div className='col'>
          <img src={'https://images.bewakoof.com/uploads/grid/app/bewakoof-online-fashion-dotd-banner-1611318853.jpg' || 'image/home/offer1.png'} className='img-fluid' />
        </div>
      </div>
    </div>
  );
};
