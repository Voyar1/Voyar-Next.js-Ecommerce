import ProductCard from "../productCard/ProductCard";
import styles from "./featuredProducts.module.css";

const products = [
  {
    name: "VOYAR universal",
    image: "/product-image.jpg",
    cut: "Slim Fit",
    price: 30,
  },
  {
    name: "VOYAR universal",
    image: "/product-image.jpg",
    cut: "Slim Fit",
    price: 30,
  },
  {
    name: "VOYAR universal",
    image: "/product-image.jpg",
    cut: "Slim Fit",
    price: 30,
  },
  {
    name: "VOYAR universal",
    image: "/product-image.jpg",
    cut: "Slim Fit",
    price: 30,
  },
];

const FeaturedProducts = () => {
  return (
    <section className={styles.featuredProductsSection}>
      <span className={styles.featuredProductsCategory}>WOMENS</span>
      <div className={styles.featuredProductsInfo}>
        <h2 className={styles.productsSubcategory}>NEW RELEASES</h2>
        <span className={styles.productsLink}>View All</span>
      </div>
      <div className={styles.featuredProducts}>
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
