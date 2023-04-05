import styles from "./productCard.module.css";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { MdRemove } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.productCard}>
        <div
          className={styles.productImage}
          onMouseOver={() => setisHovered(true)}
          onMouseOut={() => setisHovered(false)}
        >
          <Link href="/category/women">
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
            <button>
              <AiOutlineHeart />
            </button>
            <div className={styles.countHandler}>
              <button>
                <MdRemove />
              </button>
              <span>1</span>
              <button>
                <IoIosAdd />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.productInfo}>
          <span className={styles.productName}>{product.attributes.name}</span>
          <span className={styles.productCut}>{product.attributes.cut}</span>
          <span className={styles.prodcutPrice}>
            {`${product.attributes.price} $`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
