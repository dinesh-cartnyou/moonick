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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useGlobals from '../utils/global-functions/use-globals';
import UseHeaderchange from '../utils/global-functions/use-Header-change';

const Home = () => {
  const headerInfo = UseHeaderchange();
  const [filters, setFilters] = headerInfo;
  const globals = useGlobals();
  const { location } = globals;
  let pathname = location && location.pathname.toString();
  let pathValue = pathname && pathname.substring(pathname.lastIndexOf('/') + 1);
  useEffect(() => {
    if (pathname.includes('home')) {
      setFilters({
        ...filters,
        path: 'home',
      })
    }
  }, [])
  const topMostCategories = [
    {
      name: 'MEN',
      key: 'men',
      route: '/home',
      component: Men
    },
    {
      name: 'WOMEN',
      key: 'women',
      route: '/home/women',
      component: Women
    },
    {
      name: 'ACCESSORIES',
      key: 'accessories',
      route: '/home/accessories',
      component: Accessories
    },
    {
      name: 'CATEGORY A',
      key: 'categoryA',
      route: '/home/category-A',
      component: CategoryA
    },
    {
      name: 'CATEGORY B',
      key: 'categoryB',
      route: '/home/category-B',
      component: CategoryB
    },
    {
      name: 'CATEGORY C',
      key: 'categoryC',
      route: '/home/category-C',
      component: CategoryC
    }
  ];
  console.log(filters, window.newMemory, headerInfo);
  return (
    <Fragment>
      <div className='badydiv'>
        <div className='universalDiv'>
          <div className='container'>
            <Navbar />
          </div>
          <section className='bodypanelmian'>
            <div className='container'>
              <TopMostCategories data={topMostCategories} />
              <Router>
                <Switch>
                  {
                    topMostCategories && topMostCategories.length > 0 && topMostCategories.map(category => {
                      console.log(category, 'category');
                      return (
                        <Route key={category.key} exact path={category.route} component={category.component} />
                      )
                    })
                  }
                </Switch>
              </Router>
              <Footer />
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  )
}

const Men = () => {
  return (
    <div>
      Hello world 1
    </div>
  )
}

const Women = () => {
  return (
    <div>
      Hello world 2
    </div>
  )
}

const Accessories = () => {
  return (
    <div>
      Hello world 3
    </div>
  )
}

const CategoryA = () => {
  return (
    <div>
      Hello world 4
    </div>
  )
}

const CategoryB = () => {
  return (
    <div>
      Hello world 5
    </div>
  )
}

const CategoryC = () => {
  return (
    <div>
      Hello world 6
    </div>
  )
}

// const Home = ({ homePageData, contactPageData, data, contact }) => {
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

// Home.propTypes = {
//   homePageData: PropTypes.func,
//   contactPageData: PropTypes.func,
//   home: PropTypes.object,
//   contact: PropTypes.object
// };

const mapStateToProps = state => ({
  data: state.home,
  contact: state.contact
});

export default connect(mapStateToProps, { homePageData, contactPageData })(Home);
