import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";
import {CartRowItem} from "../types";

export interface CartState {
    items: CartRowItem[];
}

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{slug: string, price: number, quantity: number}>) => {
            const { slug, price, quantity } = action.payload;
            const existingItem = state.items.find(item => item.slug === slug);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({slug, price, quantity});
            }
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.slug !== action.payload);
        },
        emptyCart: (state) => {
            state.items = []
        },
        updateItemQuantity: (state, action: PayloadAction<{ slug: string; quantity: number }>) => {
            const { slug, quantity } = action.payload;
            const existingItem = state.items.find(item => item.slug === slug);

            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
    }
});

export const {add, updateItemQuantity,emptyCart, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;
export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemBySlug = (slug: string) =>
    createSelector([selectCartItems], (items) => items.find((item) => item.slug === slug));
export const selectAllCartItems = createSelector([selectCartItems], (items) => items);