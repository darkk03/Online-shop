
export const removeFromCart = (itemId) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: itemId,
    };
};


export const increaseQuantity = (itemId) => {
    return {
        type: "INCREASE_QUANTITY",
        payload: itemId,
    };
};


export const decreaseQuantity = (itemId) => {
    return {
        type: "DECREASE_QUANTITY",
        payload: itemId,
    };
};


export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART", 
        payload: item,
    };
};


export const removeFromFavorite = (itemId) => {
    return {
        type: "REMOVE_FROM_FAVORITE",
        payload: itemId,
    };
};

export const addToFavorite = (item) => {
    return {
        type: "ADD_TO_FAVORITE", 
        payload: item,
    };
};