import React from "react";
import '../../styles/sidebar.css';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const { list } = useSelector(({ categories }) => categories);

    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="title">CATEGORIES</div>
                <nav>
                    <div className="menu">
                        {list.map(({ id, name }) => (
                            <div key={id}>
                                <NavLink to={`/categories/${id}`} style={{ textDecoration: 'none', color: 'var(--dark-sea)' }} > {name} </NavLink>
                            </div>
                        ))}
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


