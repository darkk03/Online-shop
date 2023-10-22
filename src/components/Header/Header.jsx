import React from "react";

import '../../styles/header.css'; // Изменил эту строку
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
    <div className="header"> 
        <div className="logo"> 
            <Link to={ROUTES.HOME}>
                <img src={logo} alt="Logo" />
            </Link>
        </div>
    </div>
    );
};

export default Header;
