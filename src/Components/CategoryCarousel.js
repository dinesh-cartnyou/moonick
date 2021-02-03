import React, { Fragment } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CategoryCard } from './CategoryCard';
import PropTypes from 'prop-types';

const CategoryCarousel = ({data}) => {
  let settings = {
    dot: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    cssEase: 'liner'
  };
  
  return (
    <Fragment>
      <div className='categry text-center'>
        {/* <div className='row no-gutters'> */}
        {/* <div className='productslder'> */}
        <Slider {...settings}>
        {/* {
          data && Object.keys(data).length > 0 && data.map(slider => {
            return(
              <CategoryCard data={slider} />
            )
          })
        } */}
          <CategoryCard image={'https://images.bewakoof.com/uploads/grid/app/bewakoof-online-fashion-COTM-arced-green-msite-highlight-box-1612088826.jpg'} categoryName={'Color Of The Month'} />
          <CategoryCard image={'https://images.bewakoof.com/uploads/grid/app/DOTD-highlight-box-1611330973.jpg'} categoryName={'Design of the day'} />
          <CategoryCard image={'https://images.bewakoof.com/uploads/grid/app/OFFERS-1603145170.png'} categoryName={'Clearance Zone'} />
          <CategoryCard image={'https://images.bewakoof.com/uploads/grid/app/NEW-MEN-1603145169.png'} categoryName={'New Arrivals'} />
          <CategoryCard image={'https://images.bewakoof.com/uploads/grid/app/Bestsellers-1603991978.png'} categoryName={'The Winter Store'} />
        </Slider>
        {/* </div> */}
        {/* </div> */}
      </div>
    </Fragment>
  );
};

CategoryCarousel.propTypes = {
  data: PropTypes.array
}

export default CategoryCarousel;