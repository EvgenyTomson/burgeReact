import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice.js";
import productReducer from "./product/productSlice.js";



export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        order: orderReducer,
    },

    middleware: getDefaultMiddleware => {
        const mdws = getDefaultMiddleware().concat(localStorageMiddleware);
        return mdws
    }
});