import Link from "next/link";
import styles from "./navbar.module.css";
import { BiSearch, BiCart, BiUser } from "react-icons/bi";
const Navbar = () => {
  return (
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
  );
};

export default Navbar;
