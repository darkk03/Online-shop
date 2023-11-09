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
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item => 
                        item.id === action.payload.id 
                            ? { ...item, quantity: item.quantity + 1 } 
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: action.payload.quantity || 1 }],
                };
            }
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload.id) {
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
