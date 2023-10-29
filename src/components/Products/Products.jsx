import React from "react";

import '../../styles/Products.css'
import { Link } from "react-router-dom";

const Products = ({title, products = [], amount}) =>{

    const list = products.filter((_, i) => i < amount  )

    return(
        <div className="Products">
            <div className="Products-content">
                <h2>
                    Trending
                </h2>
                <div className="list">
                    {list.map (({ id, images, title, category: { name: cat}, price})  => (
                        <Link to={`/products/${id}`} key={id} className="mainproduct" style={{ textDecoration: 'none', color: 'var(--dark-sea)'}}>   
                            <img src={images[0]} alt="Product Image" className="image_producs"/>                     
                            <div className="contentprod">  
                                <h3 className="product-title">
                                    {title}
                                </h3>
                                <div className="cat">
                                    {cat}
                                </div>
                                <div className="info">
                                    <div className="prices">
                                            {Math.floor(price)}$
                                    </div>
                                    <div className="purchases">
                                        {Math.floor( Math.random() * 20 + 1)} purchased 
                                    </div>
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Products;