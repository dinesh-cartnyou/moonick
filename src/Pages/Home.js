import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductCard } from '../Components/ProductCard';
import { ProductCarousel } from '../Components/ProductCarousel';
import Navbar from '../Components/Navbar';
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
import TopMostCategories from './top-most-categories';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import useGlobals from '../utils/global-functions/use-globals';
import UseHeaderchange from '../utils/global-functions/use-Header-change';

const Home = () => {
  // const headerInfo = UseHeaderchange();
  // const [filters, setFilters] = headerInfo;
  const globals = useGlobals();
  const { location } = globals;
  let pathname = location && location.pathname.toString();
  let pathValue = pathname && pathname.substring(pathname.lastIndexOf('/') + 1);
  let headerInfo = pathname.includes('home') && UseHeaderchange(pathname.substr(1));
  useEffect(() => {
    if (pathname.includes('home')) {
      // let headerInfo = UseHeaderchange(pathname);
      // setFilters({
      //   ...filters,
      //   path: 'home',
      // })
      console.log(headerInfo, 'headerInfo');
    }
  }, [])
  const topMostCategories = [
    {
      name: 'MEN',
      key: 'men',
      route: '/home',
      // component: Men
    },
    {
      name: 'WOMEN',
      key: 'women',
      route: '/home/women',
      // component: Women
    },
    {
      name: 'ACCESSORIES',
      key: 'accessories',
      route: '/home/accessories',
      // component: Accessories
    },
    {
      name: 'CATEGORY A',
      key: 'categoryA',
      route: '/home/category-A',
      // component: CategoryA
    },
    {
      name: 'CATEGORY B',
      key: 'categoryB',
      route: '/home/category-B',
      // component: CategoryB
    },
    {
      name: 'CATEGORY C',
      key: 'categoryC',
      route: '/home/category-C',
      // component: CategoryC
    }
  ];
  // console.log(filters, window.newMemory, headerInfo, 'check again');
  return (
    <Fragment>
      <div className='badydiv'>
        <div className='universalDiv'>
          <div className='container main-header-div'>
            <Navbar />
          </div>
          <section className='bodypanelmian other-section-div'>
            <div className='container'>
              <TopMostCategories data={topMostCategories} />
              {/* <Router> */}
              <Switch>
                {/* <Route exact path='/home' component={Men} />
                <Route exact path='/home/women' component={Women} />
                <Route exact path='/home/accessories' component={Accessories} />
                <Route exact path='/home/category-A' component={CategoryA} />
                <Route exact path='/home/category-B' component={CategoryB} />
                <Route exact path='/home/category-C' component={CategoryC} /> */}
                {
                  topMostCategories && topMostCategories.length > 0 && topMostCategories.map(category => {
                    // console.log(category, 'category');
                    return (
                      <Route key={category.key} exact path={category.route} component={NewHome} />
                    )
                  })
                }
              </Switch>
              {/* </Router> */}
              <Footer />
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  )
}

// const Men = () => {
//   return (
//     <div>
//       Hello world 1,Hey you
//     </div>
//   )
// }

// const Women = () => {
//   return (
//     <div>
//       Hello world 2
//     </div>
//   )
// }

// const Accessories = () => {
//   return (
//     <div>
//       Hello world 3
//     </div>
//   )
// }

// const CategoryA = () => {
//   return (
//     <div>
//       Hello world 4
//     </div>
//   )
// }

// const CategoryB = () => {
//   return (
//     <div>
//       Hello world 5
//     </div>
//   )
// }

// const CategoryC = () => {
//   return (
//     <div>
//       Hello world 6
//     </div>
//   )
// }

// const NewHome = ({ homePageData, contactPageData, data, contact }) => {
//   // const [data,setData] = useState({});
//   let settings = {
//     dot: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     cssEase: 'liner'
//   };

//   useEffect(() => {
//     // let res = axios.get('https://run.mocky.io/v3/b43c654d-e24b-4400-8359-75ab237aaefa');
//     // res.then(response => {
//     //   console.log(response.data,'response data');
//     //   setData({...response.data});
//     // }).catch(err => {
//     //   console.log(err);
//     // })
//     let res = axios.get('https://mobilenyou.herokuapp.com/products');
//     res.then(response => {
//       console.log(response.data, 'response data');
//     }).catch(err => {
//       console.log(err);
//     })
//   }, [])
//   // const [newData,setNewData] = useState({});
//   useEffect(() => {
//     homePageData();
//     contactPageData();
//   }, []);

//   // useEffect(() => {    
//   //     let res = axios.get('http://15.206.89.124/supershop/api/getHomeRecord');
//   //     res.then(response => {
//   //       console.log(response.data,'response data');
//   //       setNewData({...response.data})
//   //     }).catch(err => {
//   //       console.log(err);
//   //     })       
//   // },[])

//   console.log(data, data.data, data.error, 'data coming from redux actions', contact, 'contact data');
//   // console.log(data,'new data');
//   return (
//     <Fragment>
//       <div className='badydiv'>
//         <div className='universalDiv'>
//           <div className='container'>
//             <Navbar></Navbar>
//           </div>
//           <section className='bodypanelmian'>
//             <div className='container'>
//               <TopMostCategories data={topMostCategories} />
//               {
//                 data && data.data && data.data.banners && Object.keys(data.data).length > 0 && Object.keys(data.data.banners).length &&
//                 <div className='row no-gutters'>
//                   <div className='col'>
//                     <div className='bodypanel'>
//                       <div className='addbanner'>
//                         {
//                           // data.data.banners.sale_banner.imageUrl &&
//                           <Link >
//                             <img src={'image/home/addbtop.png'} className='img-fluid' />
//                           </Link>
//                         }
//                       </div>
//                       <BannerCarousel />
//                       {
//                         data.data.banners.sale_banner && data.data.banners.sale_banner.status &&
//                         <div className='addbanner'>
//                           {
//                             data.data.banners.sale_banner.imageUrl &&
//                             <Link to={data.data.banners.sale_banner.redirect_link}>
//                               <img src={data.data.banners.sale_banner.imageUrl || 'image/home/addbtop.png'} className='img-fluid' />
//                             </Link>
//                           }
//                         </div>
//                       }
//                       {
//                         data.data.banners.hero_banners && data.data.banners.hero_banners.length > 0 &&
//                         <BannerCarousel data={data.data.banners.hero_banners} />
//                       }
//                     </div>
//                   </div>
//                 </div>
//               }
//               {
//                 data && data.data && Object.keys(data.data).length > 0 &&
//                 <>
//                   {
//                     (data.data.category || data.data.categories) && (data.data.category.length > 0 || data.data.categories.length > 0) &&
//                     <CategoryCarousel data={data.data.category || data.data.categories} />
//                   }
//                   {/* flash sale sectoin start */}
//                   <Flashsale />
//                   {/* flash sale sectoin end */}
//                   <div className='clearfix' />
//                   {/* Recently viewed start */}
//                   <RecentlyViewed />
//                   {/* Recently viewed  end */}
//                   <PhoneUnderBanner />
//                   {/* Phone Under section */}
//                   {/* offer banner 1 */}
//                   <SingleBanner />
//                   {/* offer banner 1 */}
//                   {/* Mobile Zone */}
//                   <MobileZone />
//                   {/* Mobile Zone*/}
//                   {/* offer banner 2 */}
//                   {/* Add banner4 */}
//                   <DoubleBanner />
//                   {/* offer banner 2 */}
//                   {/* tablet Zone */}
//                   <TabletZone />
//                   {/* Tablet Zone*/}
//                   {/* Add banner4 */}
//                   <TrippleBanner />
//                   {/* Add banner*/}
//                   {/* Accessories  Zone */}
//                   <AccessoriesZone />
//                   {/* Accessories  Zone*/}
//                   <div className='clearfix' />
//                   {/* Mobile Accessories Product */}
//                   <BottomCategories />
//                   {/* Mobile Accessories Product */}
//                   {/* Add banner4 */}
//                   <TrippleBanner />
//                   {/* Add banner*/}
//                   {/* Category X */}
//                   <CategoryX />
//                   {/*Category X*/}
//                   {/* Brands Section*/}
//                   <Brands data={data.data.brand} />
//                   {/* Brands Section*/}
//                 </>
//               }
//               {/* {
//                 contact && contact.data && Object.keys(contact.data).length > 0 &&
//                 <Footer data={contact.data} />
//               } */}
//             </div>
//             {/* Main container and section close */}
//           </section>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

const NewHome = ({ }) => {
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
    // homePageData();
    // contactPageData();
    const event = new Event('changeGrid');
    window.dispatchEvent(event)
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

  // console.log(data, data.data, data.error, 'data coming from redux actions', contact, 'contact data');
  // console.log(data,'new data');
  return (
    <Fragment>
      {/* <div className='badydiv'> */}
      {/* <div className='universalDiv'> */}
      {/* <div className='container'>
            <Navbar></Navbar>
          </div> */}
      {/* <section className='bodypanelmian'> */}
      {/* <div className='container'> */}
      {/* <TopMostCategories data={topMostCategories} /> */}
      {
        // data && data.data && data.data.banners && Object.keys(data.data).length > 0 && Object.keys(data.data.banners).length &&
        <div className='row no-gutters'>
          <div className='col'>
            <div className='bodypanel'>
              {/* <div className='addbanner'>
                        {
                          data.data.banners.sale_banner.imageUrl &&
                          <Link >
                            <img src={'image/home/addbtop.png'} className='img-fluid' />
                          </Link>
                        } 
                      </div>  */}
              {
                <Link >
                  <img src={'https://images.bewakoof.com/uploads/grid/app/bewakoof-cotm-color-of-the-month-arcade-green-online-fashion-shopping-HERO-MEN-launch-min-1612114299.gif' || 'image/home/addbtop.png'} className='img-fluid' />
                </Link>
              }
              {/* <BannerCarousel /> */}
              {
                // data.data.banners.sale_banner && data.data.banners.sale_banner.status &&
                // <div className='addbanner'>
                //   {
                //     // data.data.banners.sale_banner.imageUrl &&
                //     <Link>
                //       <img src={'image/home/addbtop.png'} className='img-fluid' />
                //     </Link>
                //   }
                // </div>
              }
              {
                <Flashsale />
              }
              {
                // data.data.banners.hero_banners && data.data.banners.hero_banners.length > 0 &&
                <BannerCarousel />
              }
            </div>
          </div>
        </div>
      }
      {
        // data && data.data && Object.keys(data.data).length > 0 &&
        <>
          {
            // (data.data.category || data.data.categories) && (data.data.category.length > 0 || data.data.categories.length > 0) &&
            <CategoryCarousel />
          }
          {/* flash sale sectoin start */}

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
          {
            <div className='offer-zone'>
              <div className='container'>
                <div className='heing'>
                  <h2>Offer Zone</h2>
                </div>
                <div className='offers-info'>
                  <div className='row no-gutters'>
                    <div className='col-4'>
                      <div className='content'>
                        <img className='img-fluid' src='http://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2021/2/1/6e325b3b-8745-4ac2-beb4-08c217a294bc1612151902015-flat-60.jpg' alt='offer-1' />
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='content'>
                        <img className='img-fluid' src='http://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2021/1/28/5a5e167e-58b7-4fa5-aed7-f59fa1f73c7a1611811026600-2--3-.jpg' alt='offer-1' />
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='content'>
                        <img className='img-fluid' src='http://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2021/1/28/2febd538-1ce2-4807-8525-89e2781ebd2d1611810931241-3--4-.jpg' alt='offer-1' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
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
          <Brands />
          {/* Brands Section*/}
        </>
      }
      {/* {
                contact && contact.data && Object.keys(contact.data).length > 0 &&
                <Footer data={contact.data} />
              } */}
      {/* </div> */}
      {/* Main container and section close */}
      {/* </section> */}
      {/* </div>
      </div> */}
    </Fragment>
  );
};

NewHome.propTypes = {
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
