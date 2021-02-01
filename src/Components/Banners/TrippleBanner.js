import React from 'react';

export const TrippleBanner = () => {
  return (
    <div className='addbaners'>
      <div className='row no-gutters'>
        <div className='col'>
          <div className='row no-gutters'>
            <div className='col-6'>
              <img src={'https://images.bewakoof.com/uploads/grid/app/bewakoof-promotional-banner-2x-squad-1602150545.jpg' || 'image/addbanner/b1.jpg'} className='img-fluid left' />
              <img src={'https://images.bewakoof.com/uploads/grid/app/bewakoof-promotional-banner-2x-work-from-home-1602150546.jpg' || 'image/addbanner/b2.jpg'} className='img-fluid left' />
            </div>
            <div className='col-6'>
              <img src={'https://images.bewakoof.com/uploads/grid/app/bewakoof-promotional-banner-2x-vote-for-design-1602150546.jpg' || 'image/addbanner/b3.jpg'} className='img-fluid right' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
