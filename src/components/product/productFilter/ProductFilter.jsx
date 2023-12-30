import {
  selectMaxPrice,
  selectMinPrice,
  selectProducts,
} from "@/redux/slice/productSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [price, setPrice] = useState(10000);

  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);

  const allCatetoies = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filterCategories = (category) => {
    setCategory(category);
    dispatch(FILTER_BY_CATEGORY({ products, category }));
  };

  const allBrands = [
    "All",
    ...new Set(products.map((product) => product.brand)),
  ];

  useEffect(() => {
    dispatch(FILTER_BY_BRAND({ products, brand }));
  }, [brand, dispatch, products]);

  useEffect(() => {
    dispatch(FILTER_BY_PRICE({ products, price }));
  }, [price, dispatch, products]);

  const clearFilters = () => {
    setBrand("All");
    setCategory("All");
    setPrice(maxPrice);
  };

  return <div>ProductFilter</div>;
};

export default ProductFilter;
