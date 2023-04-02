import Link from "next/link";
import styles from "./navbar.module.css";
import { BiSearch, BiCart, BiUser, BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { setIsCartOpen } from "@/state";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const isAboveMedium = useMediaQuery("(min-width: 1060px)");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const toggleMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  const toggleCartHandler = () => {
    dispatch(setIsCartOpen());
  };

  return (
    <>
      {isAboveMedium ? (
        // DESKTOP NAV
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">VOYAR</Link>
          </div>
          <div className={styles.navItems}>
            <Link href="/women">WOMEN</Link>
            <Link href="/men">MEN</Link>
            <Link href="/acessories">ACCESSORIES</Link>
          </div>
          <div className={styles.navIcons}>
            <button>
              <BiSearch />
            </button>
            <button>
              <BiUser />
            </button>
            <button onClick={toggleCartHandler} className={styles.cartBtn}>
              <div className={`${cart.length === 0 ? "" : styles.badge}`}>
                {cart.length > 0 && cart.length}
              </div>

              <BiCart />
            </button>
          </div>
        </nav>
      ) : (
        // MOBILE NAV
        <nav className={styles.mobileNav}>
          <div className={styles.navIcons}>
            <button>
              <BiUser />
            </button>
            <button onClick={toggleCartHandler} className={styles.cartBtn}>
              <div className={`${cart.length === 0 ? "" : styles.badge}`}>
                {cart.length > 0 && cart.length}
              </div>
              <BiCart />
            </button>
          </div>
          <div className={`${styles.mobileLogo} ${styles.logo}`}>
            <Link href="/">VOYAR</Link>
          </div>
          <div className={styles.mobileNavMenu}>
            <button>
              <BiSearch />
            </button>
            <button onClick={toggleMenuHandler}>
              <BiMenu />
            </button>
          </div>
          {/* MOBILE NAV MODAL */}

          <div
            className={`${styles.mobileNavModal} ${
              isOpen ? styles.modalIsOpen : ""
            }`}
          >
            <div className={styles.closeBtnWrapper}>
              <button className={styles.closeBtn} onClick={toggleMenuHandler}>
                <MdClose />
              </button>
            </div>
            <div className={`${styles.mobileNavItems} ${styles.navItems} `}>
              <Link href="/women" onClick={toggleMenuHandler}>
                WOMEN
              </Link>
              <Link href="/men" onClick={toggleMenuHandler}>
                MEN
              </Link>
              <Link href="/acessories" onClick={toggleMenuHandler}>
                ACCESSORIES
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
