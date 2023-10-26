import { configureStore } from '@reduxjs/toolkit';

import categoriesSlice from "./categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
    },
    devTools: process.env.NODE_ENV !== 'production', 
});

export default store;