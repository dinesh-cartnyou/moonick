import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";
import WrapperDiv from '../Components/wrapper-div';

export const Wallet = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh', backgroundColor: '#f5f5f5'}}>
                    <RedNavbar navbar="MNU Wallet"></RedNavbar>
                    <WrapperDiv className={'aboutseller text-left'}>
                    {/* <section className="bodypanelmian aboutseller text-left"> */}
                        <div className="sellerlocation" style={{backgroundColor:"#D1E7DD"}}>
                            <p style={{fontSize:"14px"}}><span style={{color: '#000'}}>Your MNU Wallet Ballance</span></p>
                            <p style={{fontSize:"18px",color:"#000"}}>&#8377;599</p>
                            <p style={{color:"grey",fontSize:"12px"}}>10% redemption limit applicable</p>
                        </div>
                        <div className='sellerlocation' style={{ backgroundColor: "white" }}>
                        <p style={{ color: 'lightgrey' }}>
                            Wallet Summary
                        </p>
                        <hr style={{ margin: '1% 0' }} />
                        <div>
                          <p>
                            <b style= {{fontSize: '16px', color: '#000'}}>Oct 28, 2020</b>
                        <span className='text-right' style={{ float: 'right', color: 'gray' }}>Order ID: 123456789</span>
                          </p>
                          <p style={{color: 'gray'}}>
                            Used for product purchase
                            <span className='text-right' style={{ float: 'right', color: '#000', fontSize: '18px' }}>&minus;&#8377;599</span>
                          </p>
                        </div>
                        <hr style={{ margin: '1% 0' }} />
                        <div>
                          <p>
                            <b style= {{fontSize: '16px', color: '#000'}}>Oct 28, 2020</b>
                        <span className='text-right' style={{ float: 'right', color: 'gray' }}></span>
                          </p>
                          <p style={{color: 'gray'}}>
                            Referral Cashback
                            <span className='text-right' style={{ float: 'right', color: '#000', fontSize: '18px' }}>&#43;&#8377;599</span>
                          </p>
                        </div>
                        <hr style={{ margin: '1% 0' }} />
                        <div>
                          <p>
                            <b style= {{fontSize: '16px', color: '#000'}}>Oct 28, 2020</b>
                        <span className='text-right' style={{ float: 'right', color: 'gray' }}></span>
                          </p>
                          <p style={{color: 'gray'}}>
                            Joining Cashback
                            <span className='text-right' style={{ float: 'right', color: '#000', fontSize: '18px' }}> &#43;&#8377;599</span>
                          </p>
                        </div>
                      </div>
                      <div  style={{ paddingBottom: '10px' }}>
                        <img src="/image/header/banner_buttom.png" style={{ margin: '0 auto',position: 'relative', width: '92%',display:'block'}} />
                      </div>
                      {/* <img src="/image/header/banner_buttom.png" style={{ margin: '0 auto',position: 'relative', width: '92%'}} /> */}
                    {/* </section> */}
                    </WrapperDiv>
                </div>
            </div>
        </Fragment>
    )
}
