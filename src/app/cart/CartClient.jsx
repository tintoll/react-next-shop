"use client";
import React from "react";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_CART,
  REMOVE_FROM_CART,
} from "@/redux/slice/cartSlice";

const CartClient = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  const dispatch = useDispatch();
  const router = useRouter();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const increaseCart = (cart) => {
    dispatch(ADD_TO_CART(cart));
  };

  const decreaseCart = (cart) => {
    dispatch(DECREASE_CART(cart));
  };

  const removeFromCart = (cart) => {
    dispatch(REMOVE_FROM_CART(cart));
  };

  const clearCart = () => {
    dispatch(CLEAR_CART());
  };

  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
    dispatch(SAVE_URL(""));
  }, [dispatch, cartItems]);

  return <div>CartClient</div>;
};

export default CartClient;
