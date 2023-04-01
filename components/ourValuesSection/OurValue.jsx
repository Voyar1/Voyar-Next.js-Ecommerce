import styles from "./ourValue.module.css";
const OurValue = ({ ourValue }) => {
  return (
    <div className={styles.ourValue}>
      <div className={styles.icon}>{ourValue.icon}</div>
      <span className={styles.name}>{ourValue.name}</span>
      <p className={styles.description}>{ourValue.shortDescription}</p>
    </div>
  );
};

export default OurValue;
