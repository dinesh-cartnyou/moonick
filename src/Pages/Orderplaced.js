/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import WrapperDiv from '../Components/wrapper-div';

export const Orderplaced = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv graybg" style={{ backgroundColor: "#F5F5F5" }}>
                    <Navbar />
                    {/* <wrapperDiv> */}
                    <WrapperDiv className={'flashsale'} isFooterPresent={true} footerHeight={'60px'}>
                    {/* <section class="bodypanelmian"> */}
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"1rem",backgroundColor:"white",boxShadow: "0px 0px 4px 1px gainsboro",backgroundImage:"url(/icons/party.png)", backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>
                            <img src="/icons/tick.png" style={{width:"45%",height:"auto",marginTop:"1rem"}}></img>
                            <p style={{fontSize:"23px",fontWeight:"bolder",marginTop:"1rem"}}>Your Shipping Order</p>
                            <p style={{fontSize:"23px",fontWeight:"bolder"}}>Has Been Placed</p>
                            <p style={{fontSize:"12px",color:"grey",margin:"0.3rem 0 1rem 0"}}>Thank You For Order. We Are Processing Your Order</p>
                        </div>
                        <div class="sellerlocation" style={{backgroundColor:"white",height:"12rem",marginTop:"1rem",boxShadow: "0px 0px 4px 1px gainsboro"}}>
                            <p style={{fontSize:"12px",textAlign:"left",margin:"0.2rem 0.7rem", paddingTop:"15px"}}>Delivery by Fri, Dec 4th 20</p>
                            <br></br>
                            <hr style={{ margin: '0% 0.7rem', marginTop:"-4%", paddingBottom:"10px" }} />
                            <p style={{fontSize:"16px",fontWeight:"bold",float:"left",marginLeft:"0.7rem"}}>Neeraj Sharma</p>
                            <br></br>
                            <p style={{fontSize:"13px",float:"left",marginLeft:"0.7rem",color:"grey"}}>Rzg-261,Sitapuri-2, Street No. 13,</p>
                            <br></br>
                            <p style={{fontSize:"13px",float:"left",marginLeft:"0.7rem",color:"grey"}}>New Delhi, Delhi</p>
                            <br></br>
                            <p style={{fontSize:"13px",float:"left",marginLeft:"0.7rem",color:"grey"}}>110045</p>
                            <br></br>
                            <p style={{color:"#000",fontSize:"18px",fontWeight:"bold"}}>View Details</p>
                        </div>
                    {/* </section> */}
                    </WrapperDiv>

                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding: '6px 10px',height: '60px'}}>
                        <button className="btn w-100" style={{ padding: "4% 3%", border: "#000 solid 2px", borderRadius:"5px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "58%", backgroundColor: "white", color: "#000",height:"2rem" }}><b><span style={{float:"left"}}>Continue Shopping</span> <i style={{fontSize:"24px",float:"left"}} class='bx bx-right-arrow-alt'></i></b></button>
                    </div>

                </div>
            </div>
            
        </Fragment>
    );
};