import styles from "./Hamburger.module.scss";
const Hamburger = () => {
  return (
    <div className={styles.hamburger}>
      <div className={styles.burger} />
      <div className={styles.burger} />
      <div className={styles.burger} />
    </div>
  );
};

export default Hamburger;
