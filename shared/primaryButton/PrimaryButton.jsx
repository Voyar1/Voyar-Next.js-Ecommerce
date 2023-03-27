import styles from "./primaryButton.module.css";

const PrimaryButton = ({ children }) => {
  return <button className={styles.primaryBtn}>{children}</button>;
};

export default PrimaryButton;
