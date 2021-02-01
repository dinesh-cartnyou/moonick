import React from 'react';

export const DoubleBanner = () => {
  return (
    <div className='addbaners'>
      <div className='row no-gutters'>
        <div className='col-6'>
          <img src={'https://images.bewakoof.com/uploads/grid/app/bewakoof-promotional-banner-2x-vote-for-design-1602150546.jpg' || 'image/addbanner/b1.jpg'} className='img-fluid left' />
        </div>
        <div className='col-6'>
          <img src={'https://images.bewakoof.com/uploads/grid/app/bewakoof-promotional-banner-2x-daily-bytes-1602150544.jpg' || 'image/addbanner/b2.jpg'} className='img-fluid left' />
        </div>
      </div>
    </div>
  );
};
