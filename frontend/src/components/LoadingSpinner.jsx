import styles from "../styles/Spinner.module.css";

function LoadingSpinner() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>Loading your items...</p>
    </div>
  );
}

export default LoadingSpinner;
