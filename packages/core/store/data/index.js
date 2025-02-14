import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@yumyumApp/api";

export const store = configureStore({
    reducer: {
        api: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
