import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../../feauters/actions/actions"; 
import sprite from '../../images/sprite.svg';
import "../../styles/cart.css"
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleIncreaseQuantity = (item) => {
        dispatch(increaseQuantity(item));
    };
    
    const handleDecreaseQuantity = (item) => {
        dispatch(decreaseQuantity(item));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart_">
            <div className="cart-content">
                <h2 className="cart-title">
                    Your Cart
                </h2>
                {cart && cart.length > 0 ? (
                    <>
                        <div className="cart-list">
                            {cart.map((item) => {
                                const { title, category, images, price, id, quantity } = item;

                                return (
                                    <div className="item" key={id}>
                                        <div className="image_">
                                            <img src={images[0]} alt="Product Image" className="image_producs_" />
                                        </div>
                                        <div className="block-name-cat">
                                            <div className="name">{title}</div>
                                            <div className="category">{category.name}</div>
                                        </div>

                                        <div className="price">{price}$</div>
                                        <div className="quantity">
                                            <div className="minus" onClick={() => handleDecreaseQuantity(id)}>
                                                <svg className="icon">
                                                    <use xlinkHref={`${sprite}#minus`} />
                                                </svg>
                                            </div>
                                            <div className="quantity-num">
                                                <span>{quantity}</span>
                                            </div>
                                            <div className="plus" onClick={() => handleIncreaseQuantity(item, quantity + 1)}>
                                                <svg className="icon">
                                                    <use xlinkHref={`${sprite}#plus`} />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="total-total">{price * quantity}$</div>
                                        <div className="close" onClick={() => handleRemoveFromCart(id)}>
                                            <svg className="icon-close_">
                                                <use xlinkHref={`${sprite}#plus`} />
                                            </svg>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="actions">
                            <div className="total">
                                TOTAL PRICE:{" "}
                                <span>
                                    {getTotalPrice()}$
                                </span>
                            </div>
                            <Link to={ROUTES.PAY}>
                                <button className="proceed">
                                    Proceed to checkout
                                </button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="empty-title">Your cart is empty</div>
                )}
            </div>
        </div>
    )
}

export default Cart;
