import Link from "next/link";
import styles from "./navbar.module.css";
import { BiSearch, BiCart, BiUser, BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

const Navbar = () => {
  const isAboveMedium = useMediaQuery("(min-width: 1060px)");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen(!isOpen);
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
            <Link href="/category/women">WOMEN</Link>
            <Link href="category/men">MEN</Link>
            <Link href="category/acessories">ACCESSORIES</Link>
          </div>
          <div className={styles.navIcons}>
            <button>
              <BiSearch />
            </button>
            <button>
              <BiUser />
            </button>
            <button>
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
            <button>
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
              <Link href="/category/women">WOMEN</Link>
              <Link href="category/men">MEN</Link>
              <Link href="category/acessories">ACCESSORIES</Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
