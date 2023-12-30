import { FILTER_BY } from "@/redux/slice/filterSlice";
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
  };

  const allBrands = [
    "All",
    ...new Set(products.map((product) => product.brand)),
  ];

  useEffect(() => {
    dispatch(FILTER_BY({ products, price, category, brand }));
  }, [price, dispatch, products, category, brand]);

  const clearFilters = () => {
    setBrand("All");
    setCategory("All");
    setPrice(maxPrice);
  };

  return <div>ProductFilter</div>;
};

export default ProductFilter;
