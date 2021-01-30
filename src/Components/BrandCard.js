import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const BrandCard = ({ data }) => {
  return (
    <Fragment>
      {
        <>
          <div id={'id' || data.brand_id} className='col-3'>
            <div className='brandbox m-2'>
              <img src={'image/brands/Micromax.png' || data.imageUrl} className='w-100 img-fluid' />
              <p class="pname new-p-name mt-2">Realme</p>
            </div>
          </div>
          <div id={'id' || data.brand_id} className='col-3'>
            <div className='brandbox m-2'>
              <img src={'image/brands/Micromax.png' || data.imageUrl} className='w-100 img-fluid' />
              <p class="pname new-p-name mt-2">Realme</p>
            </div>
          </div>
          <div id={'id' || data.brand_id} className='col-3'>
            <div className='brandbox m-2'>
              <img src={'image/brands/Micromax.png' || data.imageUrl} className='w-100 img-fluid' />
              <p class="pname new-p-name mt-2">Realme</p>
            </div>
          </div>
          <div id={'id' || data.brand_id} className='col-3'>
            <div className='brandbox m-2'>
              <img src={'image/brands/Micromax.png' || data.imageUrl} className='w-100 img-fluid' />
              <p class="pname new-p-name mt-2">Realme</p>
            </div>
          </div>
          <div id={'id' || data.brand_id} className='col-3'>
            <div className='brandbox m-2'>
              <img src={'image/brands/Micromax.png' || data.imageUrl} className='w-100 img-fluid' />
              <p class="pname new-p-name mt-2">Realme</p>
            </div>
          </div>
          <div id={'id' || data.brand_id} className='col-3'>
            <div className='brandbox m-2'>
              <img src={'image/brands/Micromax.png' || data.imageUrl} className='w-100 img-fluid' />
              <p class="pname new-p-name mt-2">Realme</p>
            </div>
          </div>
          <div id={'id' || data.brand_id} className='col-3'>
            <div className='brandbox m-2'>
              <img src={'image/brands/Micromax.png' || data.imageUrl} className='w-100 img-fluid' />
              <p class="pname new-p-name mt-2">Realme</p>
            </div>
          </div>
          <div id={'id' || data.brand_id} className='col-3'>
            <div className='brandbox m-2'>
              <img src={'image/brands/Micromax.png' || data.imageUrl} className='w-100 img-fluid' />
              <p class="pname new-p-name mt-2">Realme</p>
            </div>
          </div>
        </>
      }
    </Fragment>
  );
};

BrandCard.propTypes = {
  data: PropTypes.object
}
