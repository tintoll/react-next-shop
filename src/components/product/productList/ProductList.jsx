import { SORT_PRODUCTS, selectFilterProducts } from "@/redux/slice/filterSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductList.module.scss";
import Pagination from "@/components/pagination/Pagination";
import ProductItem from "../productItem/ProductItem";

const ProductList = () => {
  const [sort, setSort] = useState("latest");

  const filteredProducts = useSelector(selectFilterProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SORT_PRODUCTS({ products: filteredProducts, sort }));
  }, [dispatch, sort]);

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

  return (
    <div className={styles.productList}>
      <div className={styles.top}>
        <div>
          <ul className={styles.sort}>
            <li className={isRadioSelected("latest") ? styles.selected : ""}>
              <input
                type="radio"
                value="latest"
                id="latest"
                checked={isRadioSelected("latest")}
                onChange={handleRadioClick}
              />
              <label htmlFor="latest">최신순</label>
            </li>
            <li
              className={isRadioSelected("lowest-price") ? styles.selected : ""}
            >
              <input
                type="radio"
                value="lowest-price"
                id="lowest-price"
                checked={isRadioSelected("lowest-price")}
                onChange={handleRadioClick}
              />
              <label htmlFor="lowest-price">낮은가격순</label>
            </li>

            <li
              className={
                isRadioSelected("highest-price") ? styles.selected : ""
              }
            >
              <input
                type="radio"
                value="highest-price"
                id="highest-price"
                checked={isRadioSelected("highest-price")}
                onChange={handleRadioClick}
              />
              <label htmlFor="highest-price">높은가격순</label>
            </li>
          </ul>
        </div>
        <div className={styles.limit}>
          <select
            value={productPerPage}
            onChange={(e) => setProductPerPage(Number(e.target.value))}
          >
            <option value={10}>10개씩 보기</option>
            <option value={20}>20개씩 보기</option>
          </select>
        </div>
      </div>
      <div className={styles.grid}>
        {currentProducts.length === 0 ? (
          <p>상품이 없습니다.</p>
        ) : (
          <>
            {currentProducts.map((product) => {
              return (
                <div key={product.id}>
                  <ProductItem {...product} />
                </div>
              );
            })}
          </>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={filteredProducts.length}
        productPerPage={productPerPage}
      />
    </div>
  );
};

export default ProductList;
