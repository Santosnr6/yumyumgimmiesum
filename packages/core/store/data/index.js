import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@yumyumApp/api";
import { cartReducer } from "@yumyumApp/reducers";

export const store = configureStore({
    reducer : {
        api : apiSlice.reducer,
        cart : cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
