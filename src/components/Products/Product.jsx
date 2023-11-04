import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import '../../styles/Product.css';

import { ROUTES } from "../../utils/routes";

const SIZES = [4, 4.5, 5];

const Product = (item) => {
    const { title, price, images, description } = item;
  
    const dispatch = useDispatch();
  
    const [currentImage, setCurrentImage] = useState(images[0]);
  
    return (
        <div className="product-cart">
            <div className="current-img">
                <img src={images} alt="Product Image" className="image-producs"/>
            </div>
            <div className="images-list">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        alt="Product Image"
                        className="images-products"
                    />
                ))}
            </div>
            





    </div>
    )
};

export default Product;
