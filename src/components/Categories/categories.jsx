import React from "react";

import { Link } from "react-router-dom";

import '../../styles/categories.css'

const Categories = ({ title, products = [], amount}) => {
    const list = products.filter((_, i) => i < amount);

    return (
        <div className="categories">
            <div className="categories_content">
                <h2>Worth seeing</h2>
                <div className="categories_list">
                    {list.map(({ id, name, image }) => (
                        <Link to={`/categories/${id}`} key={id} className="categories_item" style={{ textDecoration: 'none'}}>
                            <img src={image} alt={name} className="categoies_image"></img>
                            <div className="categories_title">
                                {name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Categories;