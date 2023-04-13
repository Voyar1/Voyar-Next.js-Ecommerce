import styles from "./productCard.module.css";
import Link from "next/link";
import { MdRemove } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { addToCart } from "@/state";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const [isHovered, setisHovered] = useState(false);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.productCard}>
        <div
          className={styles.productImage}
          onMouseOver={() => setisHovered(true)}
          onMouseOut={() => setisHovered(false)}
        >
          <Link
            href={`/${product.attributes.name
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            <img
              src={`http://localhost:1337${product?.attributes?.image?.data[0].attributes.formats.medium.url}`}
              alt={product.attributes.name}
            />
          </Link>
          <div
            className={`${styles.addToBag} ${
              isHovered ? styles.imageHovered : ""
            }`}
          >
            <button
              className={styles.addButton}
              onClick={() =>
                dispatch(addToCart({ item: { ...product, count } }))
              }
            >
              Add
            </button>
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
                <IoIosAdd
                  onClick={() => setCount((prevCount) => ++prevCount)}
                />
              </button>
            </div>
          </div>
        </div>
        <Link href="/category/women">
          <div className={styles.productInfo}>
            <span className={styles.productName}>
              {product.attributes.name}
            </span>
            <span className={styles.productCut}>{product.attributes.cut}</span>
            <span className={styles.prodcutPrice}>
              {`${product.attributes.price} $`}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
