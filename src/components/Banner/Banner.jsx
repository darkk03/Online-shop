import React from "react";

import event from '../../images/event.jpg'
import shoe from '../../images/shoe.png'
import nswitch from '../../images/switch.png'


import '../../styles/banner.css'



const Banner = () => {

    return (
        <div className="banner">
            <div className="banner_content">
                <div className="banner-left">
                <img src={shoe} alt="Shoe Image" className="shoe"/>
                <img src={nswitch} alt="Nintendo Switch Image" className="nswitch"/>
                    <div className="content-left">
                        Halloween
                        <span>SALE</span>
                    </div>
                    <button className="banner-more">See more</button>
                </div>
                
                <div className="banner-right">
                    <img src={event} className="eventimg"></img>
                    <div className="discount">
                        save up to <span>50%</span> off
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;  