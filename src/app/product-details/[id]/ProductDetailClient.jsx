"use client";
import React from "react";
import styles from "./ProductDetail.module.scss";
import useFetchDocument from "@/hooks/useFetchDocument";
import { useParams } from "next/navigation";
import Loader from "@/components/loader/Loader";

const ProductDetailClient = () => {
  const { id } = useParams();

  const { document: product } = useFetchDocument("products", id);

  const addToCart = () => {};

  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));

  const tomorrowDate = tomorrow.getDate();
  const tomorrowMonth = tomorrow.getMonth();

  return (
    <section className={styles.product}>
      {product === null ? <Loader /> : <>sss</>}
    </section>
  );
};

export default ProductDetailClient;
