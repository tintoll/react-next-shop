import { IProduct } from "@/types";
import { RootState } from "../store";

import { createSlice } from "@reduxjs/toolkit";

interface IProductState {
  products: IProduct[];
  minPrice: number;
  maxPrice: number;
}

const initialState = {
  products: [],
  minPrice: 0,
  maxPrice: 10000,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    STORE_PRODUCTS: (state, action) => {
      const products = action.payload.products;
      state.products = products;
    },
    GET_PRICE_RANGE: (state, action) => {
      const { products } = action.payload;
      const array: number[] = [];
      products.map((product: IProduct) => array.push(product.price));
      const minPrice = Math.min(...array);
      const maxPrice = Math.max(...array);

      state.minPrice = minPrice;
      state.maxPrice = maxPrice;
    },
  },
});

export const { STORE_PRODUCTS, GET_PRICE_RANGE } = productSlice.actions;

export const selectProducts = (state: RootState) => state.product.products;
export const selectMinPrice = (state: RootState) => state.product.minPrice;
export const selectMaxPrice = (state: RootState) => state.product.maxPrice;

export default productSlice.reducer;
