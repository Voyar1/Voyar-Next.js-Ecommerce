import styles from "./primaryButton.module.css";

const PrimaryButton = ({ children, className, onClick }) => {
  const buttonClasses = `${styles.primaryBtn} ${className}`;
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
