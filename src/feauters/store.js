import { configureStore } from '@reduxjs/toolkit';

import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from './products/productsSlice';
import { SingleproductSlice } from './singleproduct/singleproductSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        [SingleproductSlice.reducerPath] : SingleproductSlice.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(SingleproductSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production', 
});

export default store;