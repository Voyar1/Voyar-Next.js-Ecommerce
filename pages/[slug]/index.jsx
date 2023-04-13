import React from "react";
import { useRouter } from "next/router";
import styles from "./product.module.css";

const index = ({ item }) => {
  return <div className={styles.container}>{item.attributes.name}</div>;
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
    props: { item },
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
