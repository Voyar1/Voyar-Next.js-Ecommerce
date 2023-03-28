import Link from "next/link";
import styles from "./navbar.module.css";
import { BiSearch, BiCart, BiUser, BiMenu } from "react-icons/bi";
import useMediaQuery from "@/hooks/useMediaQuery";
const Navbar = () => {
  const isAboveMedium = useMediaQuery("(min-width: 1060px)");

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
            <BiSearch />
            <BiUser />
            <BiCart />
          </div>
        </nav>
      ) : (
        // MOBILE NAV
        <nav className={styles.mobileNav}>
          <div className={styles.navIcons}>
            <BiUser />
            <BiCart />
          </div>
          <div className={`${styles.mobileLogo} ${styles.logo}`}>
            <Link href="/">VOYAR</Link>
          </div>
          <div className={styles.mobileNavMenu}>
            <BiSearch />
            <BiMenu />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
