import React, { Fragment } from 'react';
import { RedNavbar } from "../Components/RedNavbar";
import { OrdersCard } from "../Components/OrdersCard"
import WrapperDiv from '../Components/wrapper-div';

export const OrdersList = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{backgroundColor:"#f5f5f5"}}>
                    <div class="container" style={{ backgroundColor: "white" }}></div>
                    <RedNavbar navbar="Orders" />
                    <WrapperDiv headerHeight={'48px'} isFooterPresent={true} footerHeight={'60px'}>
                        <section class="bodypanelmian">
                            <OrdersCard orderStatus="Order Placed" card={true}/>
                            <OrdersCard orderStatus="Dispatched" card={true}/>
                            <OrdersCard orderStatus="Out of Delivery" card={true}/>
                            <OrdersCard orderStatus="Refund Successful" card={true}/>
                            <OrdersCard orderStatus="Delivered" card={true}/>
                            <OrdersCard orderStatus="Delivered" review={true} card={true}/>
                            <OrdersCard orderStatus="Cancelled" card={true}/>                            
                        </section>
                    </WrapperDiv>
                    <div style={{height: '60px',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <button className="btn text-center" style={{width: '90%',margin:"2% 0", padding: "2% 9%", border: "#000 solid 2px", borderRadius:"2px", backgroundColor: "white", color: "#000",height:"3rem" }}><b className='d-flex align-items-center justify-content-center'><span>Continue Shopping</span> <i style={{fontSize:"24px"}} class='bx bx-right-arrow-alt'></i></b></button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};