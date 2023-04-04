import styles from "./productCard.module.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href="/category/women" className={styles.productCardWrapper}>
      <div className={styles.productCard}>
        <div className={styles.productImage}>
          <img
            src={`http://localhost:1337${product?.attributes?.image?.data[0].attributes.formats.medium.url}`}
            alt={product.attributes.name}
          />
        </div>
        <div className={styles.productInfo}>
          <span className={styles.productName}>{product.attributes.name}</span>
          <span className={styles.productCut}>{product.attributes.cut}</span>
          <span className={styles.prodcutPrice}>
            {`${product.attributes.price} $`}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
