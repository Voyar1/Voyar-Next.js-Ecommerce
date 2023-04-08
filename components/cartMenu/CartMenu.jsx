import React, { useEffect } from "react";
import styles from "./cartMenu.module.css";
import { MdClose, MdRemove } from "react-icons/md";
import { setIsCartOpen } from "@/state";
import { useSelector, useDispatch } from "react-redux";
import { BiTrash } from "react-icons/bi";
import { GrFormAdd } from "react-icons/gr";

const CartMenu = () => {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen]);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

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
          <div className={styles.cartSummary}>
            <span>SUMMARY</span>
            <div
              className={styles.productsCount}
            >{`${cartItems.length} products`}</div>
            <div className={styles.productsTotalPrice}>
              <span>Sub Total</span>
              <span>{`${totalPrice}$`}</span>
            </div>
          </div>
          <div className={styles.cartItems}>
            {cartItems.map((cartItem) => (
              <div
                key={`${cartItem.attributes.name}-${cartItem.id}`}
                className={styles.cartItem}
              >
                <div className={styles.cartItemImage}>
                  <img
                    src={`http://localhost:1337${cartItem?.attributes?.image?.data[0].attributes.formats.medium.url}`}
                    alt={cartItem.attributes.name}
                  />
                </div>
                <div className={styles.carItemInfo}>
                  <div className={styles.carItemInfoWrapper}>
                    <span className={styles.name}>
                      {cartItem.attributes.name}
                    </span>
                    <span className={styles.cut}>
                      {cartItem.attributes.cut}
                    </span>
                    <span
                      className={styles.price}
                    >{`${cartItem.attributes.price} $`}</span>
                  </div>

                  <div className={styles.cartItemActions}>
                    <button>
                      <BiTrash />
                    </button>
                    <div className={styles.countHandler}>
                      <button>
                        <MdRemove />
                      </button>
                      <span>1</span>
                      <button>
                        <GrFormAdd />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
