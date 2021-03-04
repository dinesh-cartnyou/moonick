import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";
import WrapperDiv from '../Components/wrapper-div';

export const EmptyWishlist = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{backgroundColor:"#f5f5f5", height:"calc(100vh)"}}>
                    <div class="container" style={{ backgroundColor: "white" }}></div>
                    <RedNavbar navbar="Wishlist" />
                    <WrapperDiv headerHeight={'48px'}>
                        <section class="bodypanelmian">
                            <div style={{textAlign:"center", marginTop:"40%"}}>
                                <img style={{width:"50%"}} src="/icons/Fail.png"></img>
                                <h3 style={{color:"#000", fontSize:"18px", marginTop:"10%"}}><b>Your Wishlist is Empty</b></h3>
                                <h6 style={{color:"gray",fontSize:"12px",marginTop:"2%"}}>There Are No Items In Your Wishlist</h6>
                                <button className="btn" style={{marginTop:"8%", padding: "2% 9%", border: "#000 solid 2px", borderRadius:"2px", backgroundColor: "white", color: "#000",height:"3rem" }}><b><span style={{float:"left"}}>Continue Shopping</span> <i style={{fontSize:"24px",float:"left"}} class='bx bx-right-arrow-alt'></i></b></button>
                            </div>
                        </section>
                    </WrapperDiv>
                </div>
            </div>
        </Fragment>
    );
};
