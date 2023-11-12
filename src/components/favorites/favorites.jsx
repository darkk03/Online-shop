import React from "react";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import sprite from '../../images/sprite.svg';
import { removeFromFavorite } from "../../feauters/actions/actions"; 

const Favorites = () => {
    const favorite = useSelector((state) => state.cart.favorite);
    const dispatch = useDispatch();

    const handleRemoveFromFavorite = (itemId) => {
        dispatch(removeFromFavorite(itemId));
    };

    return (
        <div className="Products">
            <div className="Products-content">
                <h2 className="cart-title">
                    Favorite list
                </h2>
                {favorite && favorite.length > 0 ? (
                    <>
                        <div className="list">
                            {favorite.map((item) => {
                                const { title, category, images, price, id } = item;

                                return (
                                    <div className="item" key={id}>
                                        <div className="image_">
                                            <img src={images[0]} alt="Product Image" className="image_producs_" />
                                        </div>
                                        <div className="fav-price">
                                            {price}
                                        </div>

                                        <div className="block-name-cat">
                                            <div className="name">{title}</div>
                                            <div className="category">{category.name}</div>
                                        </div>
                                        <div className="close" onClick={() => handleRemoveFromFavorite(id)}>
                                            <svg className="icon-close_">
                                                <use xlinkHref={`${sprite}#plus`} />
                                            </svg>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                ) : (
                    <div className="empty-title">Your favorite list is empty</div>
                )}
            </div>
        </div>
    )
}

export default Favorites;