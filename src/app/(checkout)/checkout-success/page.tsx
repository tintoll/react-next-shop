import Button from "@/components/button/Button";
import Heading from "@/components/heading/Heading";
import { formatTime } from "@/utils/dayjs";
import priceFormat from "@/utils/priceFormat";
import Link from "next/link";
import React from "react";
import styles from "./CheckoutSuccess.module.scss";

interface ICheckoutSuccessProps {
  searchParams: {
    orderId: string;
  };
}

interface IPayment {
  orderName: string;
  orderId: string;
  approvedAt: string;
  card: {
    number: number;
    amount: number;
  };
}

// useParams() 사용안하고 params를 속성으로 바로 가져올수 있다.
// 페이지 컴포넌트에도 async가 되는구나?
const CheckoutSuccess = async ({ searchParams }: ICheckoutSuccessProps) => {
  const secretKey = process.env.NEXT_PUBLIC_TOSS_SECRET_KEY;

  // 주문 조회 API 호출 하기
  const url = `https://api.tosspayments.com/v1/payments/orders/${searchParams.orderId}`;
  const basicToken = Buffer.from(`${secretKey}:`, "utf-8").toString("base64");

  const payment = await fetch(url, {
    headers: {
      Authorization: `Basic ${basicToken}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });

  console.log("payment", payment);

  const { card } = payment;
  return (
    <section className={styles.success}>
      <Heading title="결제 성공" />
      <ul className={styles.list}>
        <li>
          <b>결제 상품:</b>
          {payment.orderName}
        </li>
        <li>
          <b>주문 번호:</b>
          {payment.orderId}
        </li>
        <li>
          <b>카드 번호:</b>
          {card.number}
        </li>
        <li>
          <b>결제 금액:</b>
          {priceFormat(card.amount)}원
        </li>
        <li>
          <b>결제승인날짜:</b> {formatTime(payment.approvedAt)}
        </li>
      </ul>
      <Button>
        <Link href="/order-history">주문 상태 보기</Link>
      </Button>
    </section>
  );
};

export default CheckoutSuccess;
