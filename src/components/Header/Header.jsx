import React from "react";

import '../../styles/header.css'; // Изменил эту строку
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import logo from '../../images/logo_white.svg';
import Profile_photo from '../../images/user.jpg';
import sprite from '../../images/sprite.svg';

const Header = () => {
    return (
    <div className="header"> 
        <div className="logo"> 
            <Link to={ROUTES.HOME}>
            <img src={logo} alt="Logo" style={{ width: '300px', height: '50px' }} />
            </Link>
        </div>
        <div className="info">
            <div className="user">
                <div className="profile_photo">
                    <img src={Profile_photo} alt="profile_photo" style={{ width: '50px', height: '50px' }}/>
                </div>
                <div className="username">
                    123
                </div>
            </div>
            <form className="form">
                <div className="icon">
                    <svg className="icon" style={{ width: '20px', height: '20px' }}>
                        <use xlinkHref={`${sprite}#search`} />
                    </svg>
                </div>
                <div className="input">
                    <input type="search" name="search" placeholder="search" autoComplete="off" onChange={() => {}} value=''/>
                </div>
                
                { false && <div className="box"></div>}
                
            </form>

            <div className="account">
                <Link to={ROUTES.HOME} className="favorites">
                    <svg className="icon_fav" style={{ width: '20px', height: '20px' }}>
                        <use xlinkHref={`${sprite}#heart`} />
                    </svg>
                </Link>

                <Link to={ROUTES.CART} className="cart">
                    <svg className="icon_cart" style={{ width: '20px', height: '20px' }}>
                        <use xlinkHref={`${sprite}#bag`} />
                    </svg>
                    <div className="count">
                        1
                    </div>
                </Link>
            </div>
        </div> 
    </div>
    );
};

export default Header;
