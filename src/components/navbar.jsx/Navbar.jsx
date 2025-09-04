import { Link } from "react-router-dom";
import Search from "../Search/Search";
import styles from "./navbar.module.css";
export default function Navbar({ product, setProduct }) {
  return (
    <div className={styles.navContainer}>
      <div>
        <Link to="/">
          <h2>BeautyVault</h2>
          <span>Discover Your Perfect Look</span>
        </Link>
      </div>
      <div className={styles.search}>
        <Search product={product} setProduct={setProduct} />
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
