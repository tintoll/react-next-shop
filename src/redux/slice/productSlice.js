const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
  minPrice: null,
  maxPrice: null,
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
      const array = [];
      products.map((product) => array.push(product.price));
      const minPrice = Math.min(...array);
      const maxPrice = Math.max(...array);

      state.minPrice = minPrice;
      state.maxPrice = maxPrice;
    },
  },
});

export const { STORE_PRODUCTS, GET_PRICE_RANGE } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectMinPrice = (state) => state.product.minPrice;
export const selectMaxPrice = (state) => state.product.maxPrice;

export default productSlice.reducer;
