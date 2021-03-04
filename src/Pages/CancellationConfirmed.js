/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";
import WrapperDiv from '../Components/wrapper-div';

export const CancellationConfirmed = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv">
                    <RedNavbar navbar="Request Cancellation"></RedNavbar>
                    <WrapperDiv className={'aboutseller text-left'} isFooterPresent={true} headerHeight={'48px'} footerHeight={'60px'} style={{ paddingBottom: '10px' }}>
                        {/* <section className="bodypanelmian aboutseller text-left" style={{ paddingBottom: '10px' }}> */}
                            <div class="sellerlocation" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"1rem",backgroundColor:"white",boxShadow: "0px 0px 4px 1px gainsboro"}}>
                                <img src="/icons/tick.png" style={{width:"45%",height:"auto",marginTop:"1rem"}}></img>
                                <p style={{fontSize:"23px",fontWeight:"bolder",marginTop:"1rem"}}>Cancellation Confirmed</p>
                                <p style={{fontSize:"12px",color:"#000",margin:"0.3rem 0 1rem 0"}}>View Status</p>
                            </div>
                        {/* </section> */}
                    </WrapperDiv>
                    <div style={{height: '60px',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <button className="btn" style={{ padding: "4% 3%", border: "#000 solid 2px", borderRadius:"5px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "calc(100% - 30px)", backgroundColor: "white", color: "#000",height:"2rem" }}><b><span style={{float:"left"}}>Continue Shopping</span> <i style={{fontSize:"24px",float:"left"}} class='bx bx-right-arrow-alt'></i></b></button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
