import styles from "./productCard.module.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href="/category/women" className={styles.productCardWrapper}>
      <div className={styles.productCard}>
        <div className={styles.productImage}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.productInfo}>
          <span className={styles.productName}>Voyar APEX</span>
          <span className={styles.productCut}>Slim Fit</span>
          <span className={styles.prodcutPrice}>30$</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
