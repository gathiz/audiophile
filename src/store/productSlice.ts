import {Product} from "../types";
import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";

type initialState = {
    productList: Product[]
}

const productList: Product[] = [];

const initialState: initialState = {
    productList,
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<Product[]>) => {
            const products = action.payload;
            if(state.productList.length === 0){
                products.forEach((product: Product) => {
                    state.productList.push(product);
                });
            }
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.productList.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            state.productList.splice(state.productList.indexOf(action.payload), 1);
        },
    }
});

export const {addProducts, addProduct, removeProduct} = productSlice.actions;
export const selectProducts = (state: RootState) => state.product.productList;
export default productSlice.reducer;

export const selectAllProducts = createSelector([selectProducts], (products) => products);

export const selectProduct = (slug: string) =>
    createSelector([selectProducts], (products) =>
        products.find((product) => product.slug === slug));
