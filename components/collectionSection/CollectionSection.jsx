import styles from "./collectionSection.module.css";
import PrimaryButton from "@/shared/primaryButton/PrimaryButton";
const CollectionSection = () => {
  const style = {
    backgroundImage: `linear-gradient(
      to bottom,
      #6d6e6dba,
      rgba(56, 51, 55, 0.288)
    ),
    url("/voyar-woman-collection.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "50% 10%",
  };

  return (
    <section className={styles.collectionSection} style={style}>
      <div className={styles.collectionSectionCta}>
        <h1>WANT 25% OFF ON NEW REALESES?</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          dolorum veniam iste officia doloremque molestias, aut nihil quidem ad
          hic.
        </p>
        <div>
          <PrimaryButton>SHOP NOW</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
