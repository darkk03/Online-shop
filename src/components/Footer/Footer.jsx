import React from "react";

import '../../styles/footer.css';
import { ROUTES } from "../../utils/routes";
import logo from '../../images/logo_white.svg';
import { Link } from "react-router-dom";
import sprite from '../../images/sprite.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="info_footer">
                    <div className="logofooter">
                        <Link to={ROUTES.HOME}>
                            <img src={logo} alt="Logo" style={{ width: '300px', height: '50px' }} />
                        </Link>
                    </div>
                    <div className="dev">
                        Developed by Darkk03
                    </div>
                    <div className="socials">
                        <a href="">
                            <svg className="icon" style={{ width: '50px', height: '30px' }}>
                                <use xlinkHref={`${sprite}#youtube`} />
                            </svg>
                        </a>
                        <a href="">
                            <svg className="icon" style={{ width: '50px', height: '30px' }}>
                                <use xlinkHref={`${sprite}#facebook`} />
                            </svg>
                        </a>
                        <a href="">
                            <svg className="icon" style={{ width: '50px', height: '30px' }}>
                                <use xlinkHref={`${sprite}#instagram`} />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
