import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { ProductGrid } from '../Components/AllProducts Page/ProductGrid';
import { Footer } from '../Components/Footer';
import { SortFilter } from '../Components/AllProducts Page/SortFilter';
import WrapperDiv from '../Components/wrapper-div';

export const FlashSalePage = () => {
  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv' style={{backgroundColor:"#f5f5f5",position: 'relative',height: '100vh'}}>
          <Navbar></Navbar>
          
          <div style={{position: 'relative',height: 'calc(100vh - 65px)'}}>
            <SortFilter given="true"></SortFilter>
            <div className='flashsale' style={{backgroundColor:"white", boxShadow:"1px 0px 4px"}}>
              <div className='row no-gutters'>
                <div className='col'>
                  <div className='heing'>
                    <h2>Flash Sale</h2>
                  </div>
                  <div className='d-flex colan justify-content-center'>
                    <div className='timer'>
                      <p className='tm'>02</p>
                      <p className='dd'>DD</p>
                    </div>
                    <span className='coln'>:</span>
                    <div className='timer'>
                      <p className='tm'>12</p>
                      <p className='dd'>HH</p>
                    </div>
                    <span className='coln'>:</span>
                    <div className='timer'>
                      <p className='tm'>24</p>
                      <p className='dd'>MM</p>
                    </div>
                    <span className='coln'>:</span>
                    <div className='timer'>
                      <p className='tm'>38</p>
                      <p className='dd'>SS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <WrapperDiv className={'flashsale'} headerHeight={'104px'} isFooterPresent={true} footerHeight={'60px'} innerWrapper={true}>
              <section className='bodypanelmian'>
                <div className='container'>
                  <ProductGrid ></ProductGrid>
                  <div style={{marginTop:"12px"}}>
                    <Footer></Footer>
                  </div>                
                </div>
              </section>
            </WrapperDiv>
          </div>

        </div>
      </div>
    </Fragment>
  );
};
