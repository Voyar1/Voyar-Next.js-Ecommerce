import React, { useState } from "react";
import styles from "./categoryProducts.module.css";
import ProductCard from "../productCard/ProductCard";
const CategoryProducts = ({ items }) => {
  const [filters, setFilters] = useState("all");
  const bottoms = items.filter(
    (item) => item.attributes.subCategory === "bottoms"
  );
  const hoodie = items.filter(
    (item) => item.attributes.subCategory === "hoodie"
  );
  const tShirt = items.filter(
    (item) => item.attributes.subCategory === "t-shirt"
  );

  return (
    <div className={styles.categoryProductsContainer}>
      <h1>Mens</h1>
      <div className={styles.categoryProductsFilters}>
        <span
          onClick={() => setFilters("bottoms")}
          className={filters === "bottoms" ? styles.active : ""}
        >
          Bottoms
        </span>
        <span
          onClick={() => setFilters("t-shirt")}
          className={filters === "t-shirt" ? styles.active : ""}
        >
          T-shirt
        </span>
        <span
          onClick={() => setFilters("hoodie")}
          className={filters === "hoodie" ? styles.active : ""}
        >
          Hoodie
        </span>
      </div>
      <div className={styles.categoryProductsList}>
        {filters === "all" &&
          items.map((item) => (
            <ProductCard product={item} key={`${item.name}-${item.id}`} />
          ))}
        {filters === "bottoms" &&
          bottoms.map((item) => (
            <ProductCard product={item} key={`${item.name}-${item.id}`} />
          ))}
        {filters === "hoodie" &&
          hoodie.map((item) => (
            <ProductCard product={item} key={`${item.name}-${item.id}`} />
          ))}
        {filters === "t-shirt" &&
          tShirt.map((item) => (
            <ProductCard product={item} key={`${item.name}-${item.id}`} />
          ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
