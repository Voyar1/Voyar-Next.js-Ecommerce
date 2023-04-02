import React from "react";
import styles from "./cartMenu.module.css";
import { MdClose } from "react-icons/md";
import { setIsCartOpen } from "@/state";
import { useSelector, useDispatch } from "react-redux";

const CartMenu = () => {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(setIsCartOpen());
  };
  return (
    <div
      className={`${styles.cartMenuWrapper} ${
        isCartOpen ? styles.activeWrapper : ""
      } `}
    >
      <div
        className={`${styles.cartMenu} ${isCartOpen ? styles.activeMenu : ""}`}
      >
        <div className={styles.cartTitle}>
          <span>YOUR BAG</span>
          <button onClick={toggleCartHandler}>
            <MdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
