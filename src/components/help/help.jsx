import React from "react";

import '../../styles/help.css';

import sprite from '../../images/sprite.svg';

const Help = () => {
  return (
    <div>
      <div className="help-header">
        <h1 className="h1_help">
          Welcome to our Help Center
        </h1>
        <div className="header-main-text">
          At [Your Online Store Name], we are committed to providing you with the best shopping experience. If you have any questions or need assistance, you've come to the right place. Our Help Center is designed to address common queries and concerns to make your shopping journey seamless.
          Browse through the categories below to find the answers you need:
        </div>
        <form className="help-form">
          <div className="icon">
            <svg className="icon" style={{ width: '20px', height: '20px' }}>
              <use xlinkHref={`${sprite}#search`} />
            </svg>
          </div>
          <div className="help-input">
            <input type="search" name="search" placeholder="Search..." autoComplete="off" onChange={() => {}} value=''/>
          </div>
                
          <div className="box"></div>
          {/* { false && <div className="box"></div>} */}
                
        </form>
      </div>
      <div className="help-body">
      <div>
        <h2>Ordering and Shipping</h2>
        <ul>
          <li><a href="/help/ordering">How to place an order</a></li>
          <li><a href="/help/tracking">Tracking your shipment</a></li>
          <li><a href="/help/shipping">Shipping policies</a></li>
          <li><a href="/help/returns">Returns and exchanges</a></li>
        </ul>
      </div>
      <div>
        <h2>Product Information</h2>
        <ul>
          <li><a href="/help/descriptions">Product descriptions</a></li>
          <li><a href="/help/sizing">Sizing and fit guides</a></li>
          <li><a href="/help/care">Care instructions</a></li>
          <li><a href="/help/availability">Product availability</a></li>
        </ul>
      </div>
      <div>
        <h2>Account and Payment</h2>
        <ul>
          <li><a href="/help/account">Creating and managing your account</a></li>
          <li><a href="/help/payment">Payment options</a></li>
          <li><a href="/help/security">Security and privacy</a></li>
          <li><a href="/help/password">Forgotten password</a></li>
        </ul>
      </div>
      <div>
        <h2>Contact Us</h2>
        <ul>
          <li><a href="/help/customer-support">Customer support</a></li>
          <li><a href="/help/live-chat">Live chat</a></li>
          <li><a href="/help/email-support">Email support</a></li>
          <li><a href="/help/phone-support">Phone support</a></li>
        </ul>
      </div>
    </div>
      <div className="help-footer">
        If you can't find the information you're looking for or need further assistance, don't hesitate to contact our friendly support team. We're here to help you every step of the way.
        Thank you for choosing [Your Online Store Name] for your shopping needs.
      </div>
    </div>
  );
}

export default Help;
