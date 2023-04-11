import CategoryProducts from "@/components/categoryProducts/CategoryProducts";
import React from "react";

const Women = ({ womenItems }) => {
  return <CategoryProducts items={womenItems} />;
};

export default Women;

export async function getStaticProps() {
  const response = await fetch(
    "http://127.0.0.1:1337/api/items?populate=image",
    {
      method: "GET",
    }
  );

  const items = await response.json();

  const womenItems = items.data.filter(
    (item) => item.attributes.category === "women"
  );

  return {
    props: { womenItems },
  };
}
