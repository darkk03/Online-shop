import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../../feauters/actions/actions";
import cartReducer from "../../feauters/actions/actionsSlice";
import "../../styles/cart.css"
import sprite from '../../images/sprite.svg';

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity(itemId));
    };

    const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity(itemId));
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
                        const { title, category, images, price, id, quantity} = item;

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
                                    <div className="minus">
                                        <svg className="icon">
                                            <use xlinkHref={`${sprite}#minus`} />
                                        </svg>
                                    </div>

                                    <span>{quantity !== undefined ? quantity : 1}</span>

                                    <div className="plus">
                                        <svg className="icon">
                                            <use xlinkHref={`${sprite}#plus`} />
                                        </svg>
                                    </div>
                                </div>
                                <div className="total">{(price !== undefined && quantity !== undefined) ? price * quantity : 0}</div>

                                <div className="close">
                                    <svg className="icon">
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
                        {getTotalPrice}
                    </span>
                 </div>


                    <button className="proceed">Proceed to checkout</button>
                </div>
                </>
            ) : (
                <div className="empty-title">Here is empty</div>
            )}
            </div>
        </div>
    )
}

export default Cart;
