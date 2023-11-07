const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                }),
            };
        case "DECREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload && item.quantity > 1) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
};

export default cartReducer;
