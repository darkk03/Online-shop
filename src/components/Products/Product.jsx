import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import '../../styles/Product.css';

import { ROUTES } from "../../utils/routes";


    

const Product = (item) => {
    const { title, price, images, description } = item;
  
    const dispatch = useDispatch();
  
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [currentSize, setCurrentSize] = useState();
  
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

            <div className="product-info">
                <div className="sing-product-title">
                    {title}
                </div>
                <div className="sing-product-price">
                    {price}$
                </div>
                <div className="sing-product-desk">
                    {description}
                </div>
                <div className="sing-product-color">
                    Color: <span> Black </span>
                </div>
                <div className="sing-product-size">
                    Sizes:
                    <button className="bm"> M </button>
                    <button className="bl"> L </button>
                    <button className="bxl"> XL </button>
                </div>
                <div className="buttons-container">
                        <button  className="Add-to-cart">
                            Add to cart
                        </button>
                        <button  className="Add-to-favorite">
                            Add to favorite
                        </button>
                </div>

            </div>
            





    </div>
    )
};

export default Product;
