import { configureStore } from '@reduxjs/toolkit';

import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from './products/productsSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
    },
    devTools: process.env.NODE_ENV !== 'production', 
});

export default store;