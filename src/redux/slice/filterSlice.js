const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filteredProducts: [],
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_GATEGORY: (state, action) => {
      const { products, category } = action.payload;

      let tempProducts = [];
      if (category === "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter(
          (product) => product.category === category
        );
      }
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_BRAND: (state, action) => {
      const { products, brand } = action.payload;

      let tempProducts = [];
      if (brand === "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter((product) => product.brand === brand);
      }
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_PRICE: (state, action) => {
      const { products, price } = action.payload;

      let tempProducts = [];
      tempProducts = products.filter((product) => product.price <= price);

      state.filteredProducts = tempProducts;
    },
    FILTER_BY: (state, action) => {
      const { products, price, category, brand } = action.payload;

      let tempProducts = [];
      if (category === "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter(
          (product) => product.category === category
        );
      }

      if (brand === "All") {
        tempProducts = tempProducts;
      } else {
        tempProducts = tempProducts.filter(
          (product) => product.brand === brand
        );
      }

      tempProducts = tempProducts.filter((product) => product.price <= price);

      state.filteredProducts = tempProducts;
    },
  },
});

export const {
  FILTER_BY,
  FILTER_BY_GATEGORY,
  FILTER_BY_PRICE,
  FILTER_BY_BRAND,
} = filterSlice.actions;

export const selectFilterProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;
