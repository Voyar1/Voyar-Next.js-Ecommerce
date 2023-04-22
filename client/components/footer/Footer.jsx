import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerFirstSection}>
          <p className={styles.footerLogo}>VOYAR</p>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            deserunt! Quo dolore asperiores ipsam quod fugit odit hic ratione
            voluptatem iure, nam, porro a delectus nisi inventore itaque?
            Repellendus soluta, sed facere quod corrupti quisquam accusantium
            eaque excepturi repellat nulla?
          </p>
        </div>
        <div className={styles.footerFirstSection}>
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className={styles.footerFirstSection}>
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Lorem ipsum, dolor sit amet consectetur</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>All right Reserved Voyar</p>
        <p></p>
      </div>
    </footer>
  );
};
export default Footer;
