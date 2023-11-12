import React from "react";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import sprite from '../../images/sprite.svg';
import { removeFromFavorite } from "../../feauters/actions/actions"; 
import "../../styles/favorites.css"

const Favorites = () => {
    const favorite = useSelector((state) => state.cart.favorite);
    const dispatch = useDispatch();

    const handleRemoveFromFavorite = (itemId) => {
        dispatch(removeFromFavorite(itemId));
    };

    return (
        <div className="favorites-fav">
            <div className="favorites-content">
                <h2 className="cart-title">
                    Favorite list
                </h2>
                {favorite && favorite.length > 0 ? (
                    <>
                        <div className="fav-list">
                            {favorite.map((item) => {
                                const { title, category, images, price, id } = item;

                                return (
                                    <div className="fav-item" key={id}>
                                        <div className="close-fav" onClick={() => handleRemoveFromFavorite(id)}>
                                            <svg className="icon-close_-fav">
                                                <use xlinkHref={`${sprite}#plus`} />
                                            </svg>
                                        </div>
                                        <div className="fav-image_">
                                            <img src={images[0]} alt="Product Image" className="-fav-image_producs_" />
                                        </div>
                                        <div className="block-cat-fav">
                                            <div className="category-fav">{category.name}</div>
                                        </div>
                                        <div className="block-name-fav">
                                            <div className="name-fav">{title}</div>
                                        </div>
                                        <div className="info-fav">
                                            <div className="fav-price">
                                                {price}$
                                            </div>
                                            <div className="purchases-fav">
                                                {Math.floor( Math.random() * 20 + 1)} purchased 
                                            </div>
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