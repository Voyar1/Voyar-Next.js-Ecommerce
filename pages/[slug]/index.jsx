import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./product.module.css";
import PrimaryButton from "@/shared/primaryButton/PrimaryButton";
import { MdRemove } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "@/state";
import ProductCard from "@/components/productCard/ProductCard";

const index = ({ item, items }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className={styles.productContainer}>
      <div className={styles.productCard}>
        <div className={styles.productImage}>
          <img
            src={`http://localhost:1337${item?.attributes?.image?.data[0].attributes.formats.medium.url}`}
            alt={item.attributes.name}
          />
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{item.attributes.name}</h1>
          <span>{`Voyar ${item.attributes.category} collection`}</span>
          <p className={styles.shortDescription}>
            {item.attributes.shortDescription}
          </p>
          <div className={styles.countHandler}>
            <button>
              <MdRemove
                onClick={() =>
                  setCount((prevCount) => {
                    if (prevCount === 1) {
                      return prevCount;
                    } else {
                      return --prevCount;
                    }
                  })
                }
              />
            </button>
            <span>{count}</span>
            <button>
              <IoIosAdd onClick={() => setCount((prevCount) => ++prevCount)} />
            </button>
          </div>
          <PrimaryButton
            className={styles.addButton}
            onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
          >
            Add to Bag
          </PrimaryButton>
        </div>
      </div>
      <div>
        <h2>RELATED PRODUCTS</h2>
        <div className={styles.categoryProductsList}>
          {items.data.map((item) => (
            <ProductCard product={item} key={`${item.name}-${item.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

export async function getStaticProps({ params }) {
  const output = params.slug.replace(/-/g, " ");
  const words = output.split(" ");
  const result = words
    .map((word) => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return "";
    })
    .join(" ");

  const response = await fetch(
    `http://127.0.0.1:1337/api/items/?populate=image`,
    {
      method: "GET",
    }
  );

  const items = await response.json();

  const item = items.data.find((item) => item.attributes.name === `${result}`);

  return {
    props: { item, items },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    "http://127.0.0.1:1337/api/items?populate=image",
    {
      method: "GET",
    }
  );

  const items = await response.json();

  return {
    paths: items.data.map((item) => {
      return {
        params: {
          slug: item.attributes.name.toLowerCase().replaceAll(" ", "-"),
        },
      };
    }),
    fallback: true,
  };
}
