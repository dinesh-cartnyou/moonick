import React, { Fragment, useEffect, useState } from 'react';
import { Navbar } from '../Components/Navbar';
import { ProductGrid } from '../Components/AllProducts Page/ProductGrid';
import { Footer } from '../Components/Footer';
import { SortFilter } from '../Components/AllProducts Page/SortFilter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { allProducts } from '../actions/products/products-all';
import Spinner from './spinner';

const AllProducts = ({ allProducts, data }) => {
  // const [products, setProducts] = useState(null);
  useEffect(() => {
    allProducts()
  }, []);

  console.log(data, 'products');
  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv'>
          <Navbar></Navbar>
          <SortFilter></SortFilter>
          {
            !data || (data && data.loading) &&
            <Spinner style={{ padding: '20px 0' }} />
          }
          {
            data && !Object.keys(data.error).length > 0 && !data.loading &&
            <section className='bodypanelmian' style={{ marginBottom: '55px' }}>
              <div className='container'>
                <ProductGrid data={data}></ProductGrid>
              </div>
            </section>
          }
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  data: state.products
});

export default connect(mapStateToProps, { allProducts })(AllProducts);
