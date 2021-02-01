import React, { Fragment } from 'react';
import { BrandCard } from './BrandCard';
import PropTypes from 'prop-types';

export const Brands = ({ data }) => {
  return (
    <Fragment>
      <div className='brands bg-white'>
        <div className='heing'>
          <h2>Short By Brands</h2>
        </div>
        <div className='row no-gutters'>
          {/* {
          data && data.length > 0 && data.map(card => {
            return(
              <BrandCard data={card}></BrandCard>
            )
          })
        } */}
          <BrandCard></BrandCard>
        </div>
      </div>
    </Fragment>
  );
};

Brands.propTypes = {
  data: PropTypes
}