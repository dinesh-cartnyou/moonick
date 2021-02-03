import React, { Fragment } from 'react';

export const BottomCategoriesCard = () => {
  return (
    <Fragment>
      <div className='col-3'>
        <div className='pbox'>
          <div className='imgtext'>
            <img src={'https://images.bewakoof.com/uploads/grid/app/192x192-Accessories-Socks-1602150296.jpg' || 'image/m-product/img1.png'} className='img-fluid' alt='' />
          </div>
          <p className='p-name'>
            Power Banks
          </p>
        </div>
      </div>
    </Fragment>
  );
};
