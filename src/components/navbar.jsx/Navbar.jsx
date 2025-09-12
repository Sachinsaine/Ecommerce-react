import { Link } from "react-router-dom";
import Search from "../Search/Search";
import styles from "./navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({
  product,
  setProduct,
  productName,
  setProductName,
}) {
  return (
    <div className={styles.navContainer}>
      <div>
        <Link to="/">
          <h2>BeautyVault</h2>
          <small>Discover Your Perfect Look</small>
        </Link>
      </div>
      <div className={styles.search}>
        <Search
          product={product}
          setProduct={setProduct}
          productName={productName}
          setProductName={setProductName}
        />
      </div>
      <div>
        {/* <Link to="/login">Login</Link> */}
        <FaShoppingCart className={styles.cart} />
      </div>
    </div>
  );
}
