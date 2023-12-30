import React from "react";
import styles from "./ProductItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import priceFormat from "@/utils/priceFormat";
import rocketBadgeIcon from "@/assets/badge-rocket.svg";
import { Rating } from "react-simple-star-rating";

const ProductItem = ({ id, name, price, imageURL }) => {
  // API 호출이 많으면 제한이 걸려서 주석
  // const { documents } = useFetchDocuments('reviews', ["productID", "==", id])
  // let productRating = 0;
  // documents.map(doc => {
  //   productRating = productRating + doc.rate;
  // })
  // const rating = productRating / documents.length;

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
              <Rating
                size={17}
                readonly
                initialValue={1}
                // initialValue={Number.isNaN(rating) ? 0 : rating}
              />
              <span className={styles.ratingCount}>
                (1)
                {/* ({documents.length}) */}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
