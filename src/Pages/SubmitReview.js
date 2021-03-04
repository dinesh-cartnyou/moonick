/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";
import WrapperDiv from '../Components/wrapper-div';

export const SubmitReview = () => {

    function colorChange(e){
        var id = e.target.id.split("-")[1];
        for(var i=4;i>=0;i--){
            if(i>=id){
                e.target.parentElement.childNodes[i].style.color="gold";
            }
            else{
                e.target.parentElement.childNodes[i].style.color="gainsboro";
            }
        }
        
    }
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh', backgroundColor:"#f5f5f5"}}>
                    <RedNavbar navbar="Review"></RedNavbar>

                    <WrapperDiv className={'aboutseller text-left'} isFooterPresent={true} footerHeight={'60px'} headerHeight={'48px'}>
                        {/* <section className="bodypanelmian "> */}
                        <div class="sellerlocation" style={{backgroundColor:"white"}}>
                                <div class="row">
                                    <div className="col-3">
                                        <img src='https://images.bewakoof.com/t540/pocket-joint-sun-active-t-shirt-men-s-printed-t-shirts-262558-1579955492.gif' className='img-fluid' alt='img1' />
                                    </div>
                                    <div className="col-9" style={{textAlign: 'left'}}>
                                        <p style={{lineHeight:"1rem",marginBottom:"0.4rem", fontSize:"0.8rem"}}>Pocket Joint Sun Active T-Shirt<br></br> Exclusive</p>
                                    </div>
                                </div>
                            </div>
                            <div class="sellerlocation" style={{backgroundColor:"white"}}>
                                <div className="row" >
                                    <div className="col-6 star-rating" style={{textAlign: 'left'}}>
                                    <i class='bx bxs-star' id="gold-0" onClick={colorChange} style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                    <i class='bx bxs-star' id="gold-1" onClick={colorChange} style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                    <i class='bx bxs-star' id="gold-2" onClick={colorChange} style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                    <i class='bx bxs-star' id="gold-3" onClick={colorChange} style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                    <i class='bx bxs-star' id="gold-4" onClick={colorChange} style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                    </div>
                                </div>
                            </div>
                            <div style={{fontFamily: 'Open Sans, sans-serif !important', margin:"1em .9em", boxShadow: '0px 0px 4px 1px gainsboro', padding: '.7em .7em', backgroundColor:"white"}}>
                                <textarea style={{width:"100%", border:"none", height:"9rem", padding:"9px", boxSizing:"border-box"}} placeholder="Your opinion matters to us. Write your review"></textarea>
                            </div>
                            <div style={{ margin: "12px 12px 12px 12px", whiteSpace: "nowrap", overflowX: "scroll", paddingBottom: "20px" }}>
                                <span style={{margin: '0.5rem', position: 'relative'}}>
                                    <img src="https://images.bewakoof.com/t540/pocket-joint-sun-active-t-shirt-men-s-printed-t-shirts-262558-1579955492.gif" width="40%"></img>
                                    <i class='bx bxs-x-circle' style={{position:"absolute", top:"-4rem", right:"0px", color:"#000", cursor: 'pointer', zIndex: '2'}}></i>
                                </span>
                                <span style={{margin: '0.5rem', position: 'relative'}}>
                                    <img src="https://images.bewakoof.com/t540/pocket-joint-sun-active-t-shirt-men-s-printed-t-shirts-262558-1579955492.gif" width="40%"></img>
                                    <i class='bx bxs-x-circle' style={{position:"absolute", top:"-4rem", right:"0px", color:"#000", cursor: 'pointer', zIndex: '2'}}></i>
                                </span>
                                <span style={{margin: '0.5rem', position: 'relative'}}>
                                    <img src="https://images.bewakoof.com/t540/pocket-joint-sun-active-t-shirt-men-s-printed-t-shirts-262558-1579955492.gif" width="40%"></img>
                                    <i class='bx bxs-x-circle' style={{position:"absolute", top:"-4rem", right:"0px", color:"#000", cursor: 'pointer', zIndex: '2'}}></i>
                                </span>
                                <span style={{margin: '0.5rem'}}>
                                    <img src="/image/add-image.png" width="40%" style={{opacity: '0.4', cursor: 'pointer'}}></img>
                                </span>
                            </div>
                        {/* </section> */}
                    </WrapperDiv>

                    <div style={{height: '60px',position:"relative",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <button type="button" class="btn" style={{backgroundColor:" #000",color: '#fff',width:"90%"}}>Save Changes</button>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
