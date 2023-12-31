import React from "react";

import '../../styles/Products.css'
import { Link } from "react-router-dom";
import { useState } from "react";


const Products = ({ title, products = [], amount, maxPrice }) => {
    const [displayedAmount, setDisplayedAmount] = useState(amount);
    const filteredProducts = products.filter((product) => product.price < maxPrice);
    const list = filteredProducts.slice(0, displayedAmount);
  
    const handleShowMore = () => {
      if (displayedAmount + 30 <= products.length) {
        setDisplayedAmount(displayedAmount + 30);
        } else {
            setDisplayedAmount(products.length);
        }
    };
  
    const handleShowLess = () => {
      setDisplayedAmount(amount); 
    };

    return(
        <div className="Products">
            <div className="Products-content">
                <h2>
                    {title}
                </h2>
                <div className="list">
                    {list.map (({ id, images, title, category: { name: cat}, price})  => (
                        <Link to={`/products/${id}`} key={id} className="mainproduct" style={{ textDecoration: 'none', color: 'var(--dark-sea)'}}>   
                            <img src={images[0]} alt="Product Image" className="image_producs"/>                     
                            <div className="contentprod">  
                                <div className="cat">
                                    {cat}
                                </div>
                                <div className="title">
                                    {title}
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
                <div className="buttons-container">
                        {displayedAmount < products.length && (
                        <button onClick={handleShowMore} className="show-more-button">
                            Show More
                        </button>
                        )}
                        {displayedAmount > amount && (
                        <button onClick={handleShowLess} className="show-less-button">
                            Show Less
                        </button>
                        )}
                </div>
            </div>
        </div>
    )
}


export default Products;