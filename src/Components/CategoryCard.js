import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const CategoryCard = ({ data, image, categoryName }) => {
  return (
    <Fragment>
      {
        // data &&
        <div id={'id' || data.category_id} className='col'>
          <div className='categbox'>
            <div className='img-bg'>
              <img
                src={image || 'https://images.bewakoof.com/uploads/grid/app/bewakoof-online-fashion-COTM-arced-green-msite-highlight-box-1612088826.jpg' || 'image/home/categ/img4.png'}
                className='img-fluid mx-auto'
                alt='Speakers'
              />
            </div>
            <p className='m-0 text-center' style={{maxWidth: '100%'}}>{categoryName || 'Design of the day' || data.category_name}</p>
          </div>
        </div>
      }
    </Fragment>
  );
};

CategoryCard.propTypes = {
  data: PropTypes.array,
  image: PropTypes.string,
  categoryName: PropTypes.string
};

