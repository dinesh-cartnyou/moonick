import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const CategoryCard = ({ data }) => {
  return (
    <Fragment>
      {
        // data &&
        <div id={'id' || data.category_id} className='col'>
          <div className='categbox'>
            <div className='img-bg'>
              <img
                src='image/home/categ/img4.png'
                className='img-fluid'
                alt='Speakers'
              />
            </div>
            <p >{'Cars' || data.category_name}</p>
          </div>
        </div>
      }
    </Fragment>
  );
};

CategoryCard.propTypes = {
  data: PropTypes.array
};

