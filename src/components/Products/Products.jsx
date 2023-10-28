import React from "react";

import '../../styles/Products.css'
import { Link } from "react-router-dom";

const Products = ({title, products = []}) =>{
    return(
        <div className="Products">
            <div className="Products-content">
                <h2>
                    {title}
                </h2>
                <div className="list">
                    {products.map (({ id, images, title, category: { name: cat}, price})  => (
                        <link to={`/products/${id}`} key={id} className="product">
                            <div className="image" style={{ backgroundImage: `url(${images[0]})`}}></div>
                            <div className="contentprod">
                                <h3 className="product-title">
                                    {title}
                                </h3>
                                <div className="cat">
                                    {cat}
                                </div>
                                <div className="info">
                                    <div className="prices">
                                        <div className="prevprice">
                                            {Math.floor(price * 0.8)}$
                                        </div>
                                    </div>
                                    <div className="purchases">
                                        {Math.floor( Math.random() * 20 + 1)} purchased 
                                        {/* chas 0 22 */}
                                    </div>
                                </div>
                            </div>

                        </link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;