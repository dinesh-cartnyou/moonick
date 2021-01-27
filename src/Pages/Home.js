import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductCard } from '../Components/ProductCard';
import { ProductCarousel } from '../Components/ProductCarousel';
import { Navbar } from '../Components/Navbar';
import { BannerCarousel } from '../Components/BannerCarousel';
import CategoryCarousel from '../Components/CategoryCarousel';
import { PhoneUnderBanner } from '../Components/PhoneUnderBanner';
import { BottomCategories } from '../Components/BottomCategories';
import { Brands } from '../Components/Brands';
import { Footer } from '../Components/Footer';
import { Flashsale } from '../Components/Flashsale';
import { RecentlyViewed } from '../Components/RecentlyViewed';
import { MobileZone } from '../Components/MobileZone';
import { TabletZone } from '../Components/TabletZone';
import { AccessoriesZone } from '../Components/AccessoriesZone';
import { CategoryX } from '../Components/CategoryX';
import { TrippleBanner } from '../Components/Banners/TrippleBanner';
import { DoubleBanner } from '../Components/Banners/DoubleBanner';
import { SingleBanner } from '../Components/Banners/SingleBanner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { homePageData } from '../actions/home-page';
import { contactPageData } from '../actions/contact';
import axios from 'axios';

const Home = ({ homePageData, contactPageData, data, contact }) => {
  // const [data,setData] = useState({});
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'liner'
  };

  useEffect(() => {
    // let res = axios.get('https://run.mocky.io/v3/b43c654d-e24b-4400-8359-75ab237aaefa');
    // res.then(response => {
    //   console.log(response.data,'response data');
    //   setData({...response.data});
    // }).catch(err => {
    //   console.log(err);
    // })
    let res = axios.get('https://mobilenyou.herokuapp.com/products');
    res.then(response => {
      console.log(response.data, 'response data');
    }).catch(err => {
      console.log(err);
    })
  }, [])
  // const [newData,setNewData] = useState({});
  useEffect(() => {
    homePageData();
    contactPageData();
  }, []);

  // useEffect(() => {    
  //     let res = axios.get('http://15.206.89.124/supershop/api/getHomeRecord');
  //     res.then(response => {
  //       console.log(response.data,'response data');
  //       setNewData({...response.data})
  //     }).catch(err => {
  //       console.log(err);
  //     })       
  // },[])

  console.log(data, data.data, data.error, 'data coming from redux actions', contact, 'contact data');
  // console.log(data,'new data');
  return (
    <Fragment>
      <div className='badydiv'>
        <div className='universalDiv'>
          <div className='container'>
            <Navbar></Navbar>
          </div>
          <section className='bodypanelmian'>
            <div className='container'>
              {
                data && data.data && data.data.banners && Object.keys(data.data).length > 0 && Object.keys(data.data.banners).length &&
                <div className='row no-gutters'>
                  <div className='col'>
                    <div className='bodypanel'>
                      {
                        data.data.banners.sale_banner && data.data.banners.sale_banner.status &&
                        <div className='addbanner'>
                          {
                            data.data.banners.sale_banner.imageUrl &&
                            <Link to={data.data.banners.sale_banner.redirect_link}>
                              <img src={data.data.banners.sale_banner.imageUrl || 'image/home/addbtop.png'} className='img-fluid' />
                            </Link>
                          }
                        </div>
                      }
                      {
                        data.data.banners.hero_banners && data.data.banners.hero_banners.length > 0 &&
                        <BannerCarousel data={data.data.banners.hero_banners} />
                      }
                    </div>
                  </div>
                </div>
              }
              {
                data && data.data && Object.keys(data.data).length > 0 &&
                <>
                  {
                    (data.data.category || data.data.categories) && (data.data.category.length > 0 || data.data.categories.length > 0) &&
                    <CategoryCarousel data={data.data.category || data.data.categories} />
                  }
                  {/* flash sale sectoin start */}
                  <Flashsale />
                  {/* flash sale sectoin end */}
                  <div className='clearfix' />
                  {/* Recently viewed start */}
                  <RecentlyViewed />
                  {/* Recently viewed  end */}
                  <PhoneUnderBanner />
                  {/* Phone Under section */}
                  {/* offer banner 1 */}
                  <SingleBanner />
                  {/* offer banner 1 */}
                  {/* Mobile Zone */}
                  <MobileZone />
                  {/* Mobile Zone*/}
                  {/* offer banner 2 */}
                  {/* Add banner4 */}
                  <DoubleBanner />
                  {/* offer banner 2 */}
                  {/* tablet Zone */}
                  <TabletZone />
                  {/* Tablet Zone*/}
                  {/* Add banner4 */}
                  <TrippleBanner />
                  {/* Add banner*/}
                  {/* Accessories  Zone */}
                  <AccessoriesZone />
                  {/* Accessories  Zone*/}
                  <div className='clearfix' />
                  {/* Mobile Accessories Product */}
                  <BottomCategories />
                  {/* Mobile Accessories Product */}
                  {/* Add banner4 */}
                  <TrippleBanner />
                  {/* Add banner*/}
                  {/* Category X */}
                  <CategoryX />
                  {/*Category X*/}
                  {/* Brands Section*/}
                  <Brands data={data.data.brand} />
                  {/* Brands Section*/}
                </>
              }
              {
                contact && contact.data && Object.keys(contact.data).length > 0 &&
                <Footer data={contact.data} />
              }
            </div>
            {/* Main container and section close */}
          </section>
        </div>
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  homePageData: PropTypes.func,
  contactPageData: PropTypes.func,
  home: PropTypes.object,
  contact: PropTypes.object
};

const mapStateToProps = state => ({
  data: state.home,
  contact: state.contact
});

export default connect(mapStateToProps, { homePageData, contactPageData })(Home);
