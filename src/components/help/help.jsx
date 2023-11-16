import React from "react";

import '../../styles/help.css';

import sprite from '../../images/sprite.svg';
import order from '../../images/order.png';
import infimg from '../../images/infprod.png';
import pay from '../../images/payment.png';
import contact from '../../images/contact.png';

const Help = () => {
  return (
    <div>
      <div className="help-header">
        <h1 className="h1_help">
          Welcome to our Help Center
        </h1>
        <div className="header-main-text">
          At Shopsprint, we are committed to providing you with the best shopping experience. If you have any questions or need assistance, you've come to the right place. Our Help Center is designed to address common queries and concerns to make your shopping journey seamless.
          Browse through the categories below to find the answers you need:
        </div>
      </div>
      <div className="help-body">
        <div className="Ordering-and-Shipping">
          <h2>Ordering and Shipping</h2>
          <img src={order} className="orderimg"></img>
          <div className="oshlist">
            <button href="" className="oshitem">How to place an order</button>
            <button href="" className="oshitem">Tracking your shipment</button>
            <button href="" className="oshitem">Shipping policies</button>
            <button href="" className="oshitem">Returns and exchanges</button>
          </div>
        </div>
        <div className="Product-Information">
          <h2>Product Information</h2>
          <img src={infimg} className="infimg"></img>
          <div className="inflist">
            <button className='infitem' href="">Product descriptions</button>
            <button className='infitem' href="">Sizing and fit guides</button>
            <button className='infitem' href="">Care instructions</button>
            <button className='infitem' href="">Product availability</button>
          </div>
        </div>
        <div className="Account-and-Payment">
          <h2>Account and Payment</h2>
          <img src={pay} className="payimg"></img>
          <div className="paylist">
            <button className='payitem' href="">Managing your account</button>
            <button className='payitem' href="">Payment options</button>
            <button className='payitem' href="">Security and privacy</button>
            <button className='payitem' href="">Forgotten password</button>
          </div>
        </div>
        <div className="Contact-Us">
          <h2>Contact Us</h2>
          <img src={contact} className="contimg"></img>
          <div className="contlist">
            <button className='contitem' href="">Customer support</button>
            <button className='contitem' href="">Live chat</button>
            <button className='contitem' href="">Email support</button>
            <button className='contitem' href="">Phone support</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
