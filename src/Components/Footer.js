import React, {Fragment,useState} from 'react';
import PropTypes from 'prop-types';

export const Footer = ({data}) => {
  const [isFooterOpen,setIsFooterOpen] = useState(false);
  function openFooter() {
    setIsFooterOpen(!isFooterOpen);
  }
    return (
        <Fragment>
              <footer>
                <div className="collapsemoreabout">
                  <div className="row no-gutters">
                    <div className="col-12">
                      {/* <p class="heading">More About Us</p> */}
                      <div className="accordion" id="accordionExample">
                        <div className="card">
                          <div id="headingOne">
                            <h2 className="mb-0">
                              <button onClick={openFooter} className="btn btn-link" type="button" >
                                <span className="heading">More About Us <br />
                                {
                                  isFooterOpen ? <i className="fas fa-chevron-up" /> : <i className="fas fa-chevron-down" />
                                }
                                </span>
                                <span />
                              </button>
                            </h2>
                          </div>
                        </div>
                        {
                          isFooterOpen &&
                          <div >
                            <div className="row no-gutters">
                              <div className="col-12">
                                <div className="footeraria">
                                  <div className="company">
                                    <ul><h3>Company </h3>
                                      <li><a href="#">About Us </a></li>
                                      <li><a href="#">We're Hiring</a></li>
                                      <li><a href="#">Terms and Condition</a></li>
                                      <li><a href="#">Privacy Policy </a></li>
                                      <li><a href="#">Blog </a></li>
                                    </ul>
                                  </div>
                                  <div className="social">
                                    <ul>
                                      <h3 className="mb-1">Social Media </h3>
                                      <li><a href><img src="image/footer/fb.png" /> </a></li>
                                      <li><a href><img src="image/footer/twit.png" /> </a></li>
                                      <li><a href><img src="image/footer/insta.png" /> </a></li>
                                    </ul>
                                  </div>
                                  <div className="company">
                                    <ul><h3>Download Our App </h3>
                                      <li><a href="#">Apple </a></li>
                                      <li><a href="#">PlayStore </a></li>
                                    </ul>
                                  </div>
                                  <div className="company">
                                    <ul><h3>Mobile</h3>
                                      <li><a href="#">New Phones </a></li>
                                      <li><a href="#">Renewed Phone </a></li>
                                      <li><a href="#">Open Box Phones </a></li>
                                    </ul>
                                  </div>
                                  <div className="company">
                                    <ul><h3>Tablets</h3>
                                      <li><a href="#">Calling Tablets</a></li>
                                      <li><a href="#"> Wifi Tablets</a></li>
                                    </ul>
                                  </div>
                                  <div className="company">
                                    <ul><h3>Accessories</h3>
                                      <li><a href="#">Mobile</a></li>
                                      <li><a href="#">Cases &amp; Covers</a></li>
                                      <li><a href="#">Powerbank </a></li>
                                      <li><a href="#">Smart Watch</a></li>
                                      <li><a href="#">Data Cables</a></li>
                                      <br />
                                      <li><a href="#">Headphones &amp; Headset</a></li>
                                      <li><a href="#">Chargers</a></li>
                                    </ul>
                                  </div>
                                  <div className="company">
                                    <ul><h3>Speaker</h3>
                                      <li><a href="#">Bluetooth/Wireless </a></li>
                                      <li><a href="#">Wired Speaker</a></li>
                                    </ul>
                                  </div>
                                  <div className="company">
                                    <p>100% Secure Payment Through PayU Money</p>
                                    <img src="image/footer/method.png" className="img-fluid payment" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
        </Fragment>
    )
}

Footer.propTypes = {
  data: PropTypes.object
};
