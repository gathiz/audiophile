import {configureStore} from "@reduxjs/toolkit";
import {productSlice} from "./productSlice.ts";
import {cartSlice} from "./cartSlice.ts";

export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        cart: cartSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;