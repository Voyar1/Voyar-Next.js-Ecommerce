import CategoryProducts from "@/components/categoryProducts/CategoryProducts";
import React from "react";

const Men = ({ menItems }) => {
  return <CategoryProducts items={menItems} />;
};

export default Men;

export async function getStaticProps() {
  const response = await fetch(
    "http://127.0.0.1:1337/api/items?populate=image",
    {
      method: "GET",
    }
  );

  const items = await response.json();

  const menItems = items.data.filter(
    (item) => item.attributes.category === "men"
  );

  return {
    props: { menItems },
  };
}
