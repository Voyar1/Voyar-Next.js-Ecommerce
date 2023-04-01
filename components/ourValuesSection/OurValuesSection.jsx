import OurValue from "./OurValue";
import styles from "./ourValuesSection.module.css";
import { BsCheckLg, BsArrowsMove, BsSend } from "react-icons/Bs";
import { AiOutlineSafety, AiOutlineCopyright } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";

const ourValues = [
  {
    icon: <BsCheckLg />,
    name: "High Quality",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse a reiciendis, praesentium veritatis eveniet.",
  },
  {
    icon: <AiOutlineSafety />,
    name: "Safety",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse a reiciendis, praesentium veritatis eveniet.",
  },
  {
    icon: <AiOutlineCopyright />,
    name: "Originality",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse a reiciendis, praesentium veritatis eveniet.",
  },
  {
    icon: <BsArrowsMove />,
    name: "Versatility",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse a reiciendis, praesentium veritatis eveniet.",
  },
  {
    icon: <FaHandshake />,
    name: "Trust",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse a reiciendis, praesentium veritatis eveniet.",
  },
  {
    icon: <BsSend />,
    name: "Fast delivery",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse a reiciendis, praesentium veritatis eveniet.",
  },
];

const OurValuesSection = () => {
  return (
    <section className={styles.ourValues}>
      <h2 className={styles.ourValuesTitle}>WHY CHOOSE US?</h2>
      <div className={styles.ourValuesWrapper}>
        <ul className={styles.ourValuesList}>
          {ourValues.map((ourValue) => {
            return <OurValue ourValue={ourValue} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default OurValuesSection;
