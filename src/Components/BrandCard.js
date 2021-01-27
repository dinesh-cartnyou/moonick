import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const BrandCard = ({data}) => {
  return (
    <Fragment>
    {
      data && Object.values(data).length > 0 &&
      <div id={data.brand_id} className='col-3'>
        <div className='brandbox'>
          <img src={data.imageUrl || 'image/brands/Micromax.png'} className='img-fluid' />
          {/* <p class="pname">Realme</p> */}
        </div>
      </div>
    }      
    </Fragment>
  );
};

BrandCard.propTypes = {
  data: PropTypes.object 
}
