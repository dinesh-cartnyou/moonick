import React, { Fragment } from 'react';
import {SingleCustomerAddress} from '../Components/CustomerAddress/SingleCustomerAddress';
import {RedNavbar} from "../Components/RedNavbar";

export const CustomerAddress = () => {
  return (
    <Fragment>
        <div class='badydiv' style={{height: '100vh'}}>
            <div class='universalDiv' style={{backgroundColor: '#f5f5f5', height: '100vh'}}>
            <section className="bodypanelmian aboutseller text-left" style={{ height: '100%',position: 'relative' }}>
                <RedNavbar navbar="Addresses"></RedNavbar>
                <div className='content' style={{height: 'calc(100% - 108px)',overflow: 'scroll'}}>
                    <SingleCustomerAddress default={true}></SingleCustomerAddress>
                    <SingleCustomerAddress default={false}></SingleCustomerAddress>
                    <SingleCustomerAddress default={false}></SingleCustomerAddress>
                    <SingleCustomerAddress default={false}></SingleCustomerAddress>
                </div>
                <div className='d-flex align-items-center w-100' style={{height: '60px',background: '#fff',position: 'absolute',bottom: '0'}}>
                  <button type="button" class="btn" style={{ padding: '2%', width: '92%', margin: '0 auto',border: '1px solid #000'}}><span style={{ fontSize: '18px' }}><b> &#43; Add Address</b></span></button>
                </div>
            </section>

            </div>
        </div>
    </Fragment>
  );
}