import { configureStore } from '@reduxjs/toolkit';

import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from './products/productsSlice';
import { SingleproductSlice } from './singleproduct/singleproductSlice';
import cartReducer from './actions/actionsSlice'; 

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        [SingleproductSlice.reducerPath] : SingleproductSlice.reducer,
        cart: cartReducer, 
    },
    middleware: (getMiddleware) => getMiddleware().concat(SingleproductSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production', 
});

export default store;