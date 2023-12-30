import { SORT_PRODUCTS, selectFilterProducts } from "@/redux/slice/filterSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const [sort, setSort] = useState("latest");

  const filteredProducts = useSelector(selectFilterProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SORT_PRODUCTS({ products: filteredProducts, sort }));
  }, [dispatch, filteredProducts, sort]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(10);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const isRadioSelected = (value) => sort === value;
  const handleRadioClick = (e) => setSort(e.target.value);

  return <div>ProductList</div>;
};

export default ProductList;
