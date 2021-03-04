import React, { Fragment,useEffect,useState } from 'react';

export const Navbar = () => {
  console.log(window.innerWidth,'window.innerWidth');

  let remainingWidth = (window.innerWidth - 400)/2;
  let [width,setWidth] = useState('');
  useEffect(() => {
    setWidth(window.innerWidth > 400 ? remainingWidth : 0);
  },[remainingWidth])

  return (
    <Fragment>
      <header>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='humburgermenu'>
              <div className='menu_overlay' />
              <div className='sidebarMenu'>
                <div className='topbanner'>
                  {' '}
                  <img
                    src='image/header/banner_side_menu.png'
                    className='img-fluid'
                  />{' '}
                </div>
                <nav className='animated bounceInDown'>
                  <ul>
                    <li className='sub-menu'>
                      <a href='#Mobile'>
                        Mobile Phone
                        <div className='fa fa-chevron-down right' />
                      </a>
                      <ul>
                        <li>
                          <a href='#Mobile' className='subm'>
                            New Phones
                          </a>
                        </li>
                        <li>
                          <a href='#Mobile' className='subm'>
                            Renewed Phones
                          </a>
                        </li>
                        <li>
                          <a href='#Mobile' className='subm'>
                            Open Box Phones
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='sub-menu'>
                      <a href='#MobileTablets'>
                        Mobile Tablets
                        <div className='fa fa-chevron-down right' />
                      </a>
                      <ul>
                        <li>
                          <a href='#MobileTablets' className='subm'>
                            Calling Tablets
                          </a>
                        </li>
                        <li>
                          <a href='#MobileTablets' className='subm'>
                            Wifi Tablets
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='sub-menu'>
                      <a href='#Accessories'>
                        Accessories
                        <div className='fa fa-chevron-down right' />
                      </a>
                      <ul>
                        <li>
                          <a href='#Accessories' className='subm'>
                            Mobile Cases &amp; Covers
                          </a>
                        </li>
                        <li>
                          <a href='#Accessories' className='subm'>
                            Powerbank
                          </a>
                        </li>
                        <li>
                          <a href='#Accessories' className='subm'>
                            Smart Watch
                          </a>
                        </li>
                        <li>
                          <a href='#Accessories' className='subm'>
                            Data Cables
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='sub-menu'>
                      <a href='#Speakers'>
                        Speakers
                        <div className='fa fa-chevron-down right' />
                      </a>
                      <ul>
                        <li>
                          <a href='#Speakers' className='subm'>
                            Bluetooth/Wireless Speakers
                          </a>
                        </li>
                        <li>
                          <a href='#Speakers' className='subm'>
                            Wired Speaker
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='#'>Offers</a>
                    </li>
                    <li>
                      <a href='#'>Sell on MNU</a>
                    </li>
                    <hr />
                    <li>
                      <a href='#'>My Account</a>
                    </li>
                    <li>
                      <a href='#'>My Orders</a>
                    </li>
                    <li>
                      <a href='#'>My Wishlist</a>
                    </li>
                    <li>
                      <a href='#'>MNU Money</a>
                    </li>
                    <li>
                      <a href='#'>My Chat</a>
                    </li>
                  </ul>
                </nav>
                <div className='buttombanner'>
                  {' '}
                  <img
                    src='image/header/banner_buttom.png'
                    className='img-fluid'
                  />{' '}
                </div>
              </div>
              <div className='head d-flex justify-content-between align-items-center' style={{position: 'relative'}}>
                <div className='lefts h-100 w-auto'>
                  <a href='#' className='openMenu'>
                    {' '}
                    <img
                      src='image/header/Hamburgur.svg'
                      className='hambur'
                    />{' '}
                  </a>
                </div>
                <div className='middle' style={{position: 'absolute',left: '50%',transform: 'translateX(-50%)'}}>
                  <div className='logo h-100 d-flex'>
                      {' '}
                    <img className='p-0 moonick-image align-self-center' style={{maxHeight:"55px"}} src='image/header/moonick.png' />{' '}
                  </div>
                </div>
                <div className='float-right'>
                  <div className='rights'>
                    <ul>
                      <li>
                        <span className='searh'>
                          <img src='image/header/search.png' />
                        </span>
                      </li>
                      <li>
                        <span className='notification'>
                          <img src='image/header/notifi.png' />
                        </span>
                      </li>

                      <li>
                        <span className='cart'>
                          <img src='image/header/cart.png' />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;