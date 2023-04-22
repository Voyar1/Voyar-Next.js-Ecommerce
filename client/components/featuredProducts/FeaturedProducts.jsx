import Link from "next/link";
import ProductCard from "../productCard/ProductCard";
import styles from "./featuredProducts.module.css";

const FeaturedProducts = ({ newReleases, slug }) => {
  return (
    <section className={styles.featuredProductsSection}>
      <span className={styles.featuredProductsCategory}>WOMENS</span>
      <div className={styles.featuredProductsInfo}>
        <h2 className={styles.productsSubcategory}>NEW RELEASES</h2>
        <Link href={slug}>
          <span className={styles.productsLink}>View All</span>
        </Link>
      </div>
      <div className={styles.featuredProducts}>
        {newReleases.map((product, index) => {
          return (
            <ProductCard
              product={product}
              key={`${product.attributes.name}-${index}`}
              className={styles.flexShrink}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
