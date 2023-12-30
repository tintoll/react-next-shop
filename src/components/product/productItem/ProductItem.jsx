import React from "react";
import styles from "./ProductItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import priceFormat from "@/utils/priceFormat";
import rocketBadgeIcon from "@/assets/badge-rocket.svg";
import { Rating } from "react-simple-star-rating";

const ProductItem = ({ id, name, price, imageURL }) => {
  const shotenText = (text, n) => {
    if (text.length > n) {
      return text.subsring(0, n).concat("...");
    }
    return text;
  };

  return (
    <div className={styles.gird}>
      <Link href={`/product-details/${id}`}>
        <div className={styles.img}>
          <Image src={imageURL} alt={name} width={265} height={265} />
        </div>
        <div className={styles.content}>
          <div className={styles.details}>
            <p>{shotenText(name, 10)}</p>
            <em>
              <strong style={{ color: "#cb1400" }}>{priceFormat(price)}</strong>
              원 <Image src={rocketBadgeIcon} alt="로켓배송" />
            </em>
            <div className={styles.rating}>
              <Rating size={17} readonly initialValue={1} />
              <span className={styles.ratingCount}>(1)</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
