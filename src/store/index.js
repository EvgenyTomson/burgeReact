import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";
import deliveryFormReducer from "./deliveryForm/deliveryFormSlice.js";
import modalDeliveryReducer from "./modalDelivery/modalDeliverySlice.js";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice.js";
import productReducer from "./product/productSlice.js";


export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        order: orderReducer,
        modalDelivery: modalDeliveryReducer,
        form: deliveryFormReducer,
    },

    middleware: getDefaultMiddleware => {
        const mdws = getDefaultMiddleware().concat(localStorageMiddleware);
        return mdws
    }
});