import React, { Fragment } from 'react';
import { ProductCarousel } from './ProductCarousel';
import ViewBtn from './view-btn';

export const MobileZone = () => {
  return (
    <Fragment>
      <div className='flashsale'>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='heing'>
              <h2>TRENDING</h2>
            </div>
            <ProductCarousel></ProductCarousel>
          </div>
        </div>
        {/* <div className='row no-gutters'>
          <div className='col'>
            <div className='viewbtn'>
              <a href='#' className='btn'>
                View All
              </a>
            </div>
          </div>
        </div> */}
        <ViewBtn />
      </div>
    </Fragment>
  );
};
