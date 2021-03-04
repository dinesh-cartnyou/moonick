/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
export const Cart = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv page-cart" style={{ backgroundColor: "#f5f5f5", height: "100%", marginBottom:"5rem", paddingBottom:"1rem" }}>
                    <div class="container" style={{ backgroundColor: "white",height: "100vh" }}>
                        <Navbar />
                    
                        <section class="bodypanelmian aboutseller text-left" style={{height: "calc(100% - 137px)",overflow: "scroll"}}>
                            <div className='sellerlocation' style={{ backgroundColor: "white" }}>
                                <section className="bodypanelmian aboutseller text-left">
                                    <div className="sellerlocation" style={{ backgroundColor: "white" }}>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-8">
                                                <div class="form-group">
                                                    <input type="number" class="form-control" id="Pincode-User" aria-describedby="Pincode" placeholder="Enter Pincode" style={{height:"3.2rem", width:"115%", border:"none", borderBottom:"solid gray 1px", borderRadius:"0px", fontSize:"15px"}}/>
                                                </div>                                
                                                </div>
                                                <div class="col-4">
                                                    <button class="btn" style={{
                                                        margin: "8% 2%",
                                                        float: 'right',
                                                        padding: "10px",
                                                        width: '80%',
                                                        background: '#000',
                                                        color: "#fff"
                                                    }}>
                                                        Check
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="https://images.bewakoof.com/t540/the-traveller-full-sleeve-t-shirt-men-s-printed-full-sleeve-t-shirt-276528-1604378760.jpg" alt="Product Image"></img>
                                        </div>
                                        <div className="col-7" style={{
                                            marginTop: "3%",
                                        }}>
                                            <h3>The Traveller Full Sleeve T-Shirt</h3>
                                            <h6 style={{
                                                color: "gray",
                                                fontSize: "10px",
                                            }}>Exclusive</h6>
                                        </div>
                                        <div className="col-2">
                                        </div>
                                    </div>
                                </div>
                                <div className="container" style={{ marginTop: "5%" }}>
                                    <div className="row">
                                        <div className="col-3">
                                            <h5 style={{
                                                fontSize: "15px",
                                                color: "lightgray",
                                            }}>Quantity</h5>
                                        </div>
                                        <div className="col-4">
                                            <select id="cars" name="cars">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                        <div className="col-5"></div>
                                    </div>
                                </div>
                                <div className="container" style={{ marginTop: "5%" }}>
                                    <div className="row">
                                        <div className="col-3">
                                            <h5 style={{
                                                fontSize: "15px",
                                                color: "gray",
                                            }}>Condition</h5>
                                        </div>
                                        <div className="col-4">
                                            <button type="button" style={{
                                                fontSize: "12px",
                                                backgroundColor: "darkgreen",
                                                color: "white",
                                                borderRadius: "2px",
                                                padding: "5px",
                                                width: "96px"
                                            }} class="btn">Renewed</button>
                                        </div>
                                        <div className="col-5"></div>
                                    </div>
                                </div>
                                <div className="container" style={{ marginTop: "5%" }}>
                                    <div className="row">
                                        <div className="col-2">
                                            <h5><b><span>&#8377;</span>5899</b></h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 style={{
                                                marginTop: "7px",
                                                marginLeft: "5px",
                                                color: "gray",
                                                fontSize: "12px"
                                            }}><strike><span>&#8377;</span>8999</strike></h5>
                                        </div>
                                        <div className="col-3">
                                            <h6 style={{ color: "#000", fontSize: "12px", marginTop: "7px" }}>50% OFF</h6>
                                        </div>
                                    </div>
                                </div>
                                <h5 style={{
                                    marginTop: "7px",
                                    marginLeft: "5px",
                                    color: "gray",
                                    fontSize: "12px"
                                }}>Free Delivery in 0-2 Days</h5>
                                <h5 style={{
                                    marginTop: "7px",
                                    marginLeft: "5px",
                                    color: "gray",
                                    fontSize: "10px"
                                }}>Buying From</h5>
                                <i class='bx bxs-cart'></i><span style={{
                                    fontSize: "12px",
                                    marginLeft: "5px",
                                }}>Cart-N-You Pvt Ltd.</span>
                                <br></br>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <i class='bx bxs-x-circle' style={{ color: "#c2172e", fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>Cash On Delivery</span><br></br>
                                            <i class='bx bxs-check-circle' style={{ color: "green", fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>10 day Replacement Policy</span><br></br>
                                            <i class='bx bxs-check-circle' style={{ color: "green", fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>Free Shopping</span><br></br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sellerlocation' style={{ backgroundColor: "white" }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="https://images.bewakoof.com/t540/the-traveller-full-sleeve-t-shirt-men-s-printed-full-sleeve-t-shirt-276528-1604378760.jpg" alt="Product Image"></img>
                                        </div>
                                        <div className="col-7" style={{
                                            marginTop: "3%",
                                        }}>
                                            <h3>The Traveller Full Sleeve T-Shirt</h3>
                                            <h6 style={{
                                                color: "gray",
                                                fontSize: "10px",
                                            }}>Exclusive</h6>
                                        </div>
                                        <div className="col-2">
                                        </div>
                                    </div>
                                </div>
                                <div className="container" style={{ marginTop: "5%" }}>
                                    <div className="row">
                                        <div className="col-3">
                                            <h5 style={{
                                                fontSize: "15px",
                                                color: "lightgray",
                                            }}>Quantity</h5>
                                        </div>
                                        <div className="col-4">
                                            <select id="cars" name="cars">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                        <div className="col-5"></div>
                                    </div>
                                </div>
                                <div className="container" style={{ marginTop: "5%" }}>
                                    <div className="row">
                                        <div className="col-3">
                                            <h5 style={{
                                                fontSize: "15px",
                                                color: "gray",
                                            }}>Condition</h5>
                                        </div>
                                        <div className="col-4">
                                            <button type="button" style={{
                                                fontSize: "12px",
                                                backgroundColor: "darkgreen",
                                                color: "white",
                                                borderRadius: "2px",
                                                padding: "5px",
                                                width: "96px"
                                            }} class="btn">Renewed</button>
                                        </div>
                                        <div className="col-5"></div>
                                    </div>
                                </div>
                                <div className="container" style={{ marginTop: "5%" }}>
                                    <div className="row">
                                        <div className="col-2">
                                            <h5><b><span>&#8377;</span>5899</b></h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 style={{
                                                marginTop: "7px",
                                                marginLeft: "5px",
                                                color: "gray",
                                                fontSize: "12px"
                                            }}><strike><span>&#8377;</span>8999</strike></h5>
                                        </div>
                                        <div className="col-3">
                                            <h6 style={{ color: "#000", fontSize: "12px", marginTop: "7px" }}>50% OFF</h6>
                                        </div>
                                    </div>
                                </div>
                                <h5 style={{
                                    marginTop: "7px",
                                    marginLeft: "5px",
                                    color: "gray",
                                    fontSize: "12px"
                                }}>Free Delivery in 0-2 Days</h5>
                                <h5 style={{
                                    marginTop: "7px",
                                    marginLeft: "5px",
                                    color: "gray",
                                    fontSize: "10px"
                                }}>Buying From</h5>
                                <i class='bx bxs-cart'></i><span style={{
                                    fontSize: "12px",
                                    marginLeft: "5px",
                                }}>Cart-N-You Pvt Ltd.</span>
                                <br></br>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <i class='bx bxs-x-circle' style={{ color: "#c2172e", fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>Cash On Delivery</span><br></br>
                                            <i class='bx bxs-check-circle' style={{ color: "green", fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>10 day Replacement Policy</span><br></br>
                                            <i class='bx bxs-check-circle' style={{ color: "green", fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>Free Shopping</span><br></br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className='sellerlocation' style={{backgroundColor:"white"}}>
                            <p style={{ color: 'lightgrey' }}>
                            Price Details
                            </p>
                            <hr style={{ margin: '1% 0' }} />
                            <p>
                            Price (9 Items)
                                <span className='text-right' style={{ float: 'right' }}>&#8377; 5000</span>
                            </p>

                            <p>
                            Shipping Cost
                                <span className='text-right' style={{ float: 'right', color: '#000' }}> Free Shipping </span>
                            </p>

                            <p>
                            Discount
                                <span className='text-right' style={{ float: 'right' }}>- &#8377; 5000</span>
                            </p>

                            <p>
                            Discount
                                <span className='text-right' style={{ float: 'right' }}>- &#8377; 500</span>
                            </p>
                            <hr style={{ margin: '2% 0' }} />
                            <p>
                            Total
                                <span className='text-right' style={{ float: 'right' }}> &#8377; 4500</span>
                            </p>
                            <hr style={{ margin: '2% 0' }} />
                            <p>
                            You will save<span className='text-right' style={{ color: '#000',fontWeight: 'bold' }}>  &#8377; 4500 </span> in this order
                            </p>
                        </div>
                            
                        </section>
                        <div class="footer" style={{
                                position: 'fixed',
                                bottom: '0',
                                width: '576px',
                                backgroundColor: '#ffffff',
                                height: '72px',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                boxShadow: '4px -5px 6px rgba(207, 207, 207, 0.5)'
                            }}>
                            <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                        <div style={{
                                            float: 'left',
                                            margin: '0 1rem'
                                        }}>
                                            <p class="left-foot">Total</p>
                                            <p style={{ color: '#000' }}><b>₹5899</b></p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <button type="button" class="btn right-foot" style={{
                                            float: 'right',background: '#000',color: '#fff'
                                        }}>
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
