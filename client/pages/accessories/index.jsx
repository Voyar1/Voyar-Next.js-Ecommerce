import CategoryProducts from "@/components/categoryProducts/CategoryProducts";
import React from "react";

const Accessories = ({ accessories }) => {
  return <CategoryProducts items={accessories} categoryName="Accessories" />;
};

export default Accessories;

export async function getStaticProps() {
  const response = await fetch(
    "http://127.0.0.1:1337/api/items?populate=image",
    {
      method: "GET",
    }
  );

  const items = await response.json();

  const accessories = items.data.filter(
    (item) => item.attributes.category === "accessories"
  );

  return {
    props: { accessories },
  };
}
