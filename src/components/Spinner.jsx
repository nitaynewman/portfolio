import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <span className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </span>
  );
}

export default Spinner;
