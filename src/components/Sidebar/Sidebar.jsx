import React from "react";

import '../../styles/sidebar.css';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="title">CATEGORIES</div>
                <nav>
                    <div className="menu">
                        <div>
                            <NavLink to={`/categories/${1}`} className="menu-link" >Link</NavLink>
                        </div>
                    </div>
                </nav>
                <div className="sidebar_footer">
                    <a href="/help" target="_blank" className="link">
                        Help 
                    </a>
                    <a href="/terms" target="_blank" className="link">
                        Terms and Conditions
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;