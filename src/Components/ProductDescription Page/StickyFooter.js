import React, { Fragment } from 'react';

export const StickyFooter = () => {
  return (
    <Fragment>
      <div className='stckyfooter'>
        <div>
          <ul className='d-flex justify-content-center align-items-center'>
            <li>
              <span className='wp'>
                <i className='fab fa-whatsapp' />
              </span>
            </li>
            <li>
              <span className='cart'>
                <i className='fas fa-shopping-cart' />
              </span>
            </li>
            <li className='flex-grow-1'>
              <span classname='d-inline-block w-100'>
                <button type='button' className='btn footer-button w-100 '>
                  <i className='fas fa-bolt' /> Buy Now
                </button>{' '}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
