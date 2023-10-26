import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesReducer'; 

import categoriesSlice from "./categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
    },
    devTools: process.env.NODE_ENV !== 'production', 
});

export default store;