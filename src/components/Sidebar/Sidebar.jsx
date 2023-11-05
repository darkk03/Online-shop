import React from "react";
import '../../styles/sidebar.css';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { list } = useSelector(({ categories }) => categories);

    const Categorieslimit = list.slice(0, 5);

    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="title">CATEGORIES</div>
                <nav>
                    <div className="menu">
                        {Categorieslimit.map(({ id, name }) => (
                            <div  key={id}>
                                <NavLink to={`/categories/${id}`} style={{ textDecoration: 'none', color: 'var(--dark-sea)' }} > {name} </NavLink>
                            </div>
                        ))}
                    </div>
                </nav>
                <div className="sidebar_footer">
                    <Link to={ROUTES.HELP} className="link">
                        Help
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;


