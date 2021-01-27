import React, { Fragment } from 'react';
import { ProductCarousel } from './ProductCarousel';

export const CategoryX = () => {
  return (
    <Fragment>
      <div className='flashsale' style={{marginTop:"-1.5rem"}}>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='heing'>
              <h2>Category X</h2>
            </div>
            <ProductCarousel></ProductCarousel>
          </div>
        </div>
        <div className='row no-gutters' style={{marginBottom:"1.5rem"}}>
          <div className='col'>
            <div className='viewbtn'>
              <a href='#' className='btn'>
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
