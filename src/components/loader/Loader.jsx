import styles from "./loader.module.css";
export default function Loader() {
  return (
    <div className={styles.loaderCont}>
      <div className={styles.circleSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
