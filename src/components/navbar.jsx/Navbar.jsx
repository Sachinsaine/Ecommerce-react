import Search from "../Search/Search";
import styles from "./navbar.module.css";
export default function Navbar({ product, setProduct }) {
  return (
    <div className={styles.navContainer}>
      <div>
        <h2>BeautyVault</h2>
        <span>Discover Your Perfect Look</span>
      </div>
      <div className={styles.search}>
        <Search product={product} setProduct={setProduct} />
      </div>
      <h2>Login</h2>
    </div>
  );
}
