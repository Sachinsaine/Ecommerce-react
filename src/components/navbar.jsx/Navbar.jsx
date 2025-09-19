import { Link } from "react-router-dom";
import Search from "../Search/Search";
import styles from "./navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({
  product,
  setProduct,
  productName,
  setProductName,
  cartItems,
}) {
  return (
    <div className={styles.navContainer}>
      <div>
        <Link to="/">
          <h2 className={styles.logo}>BeautyVault</h2>
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
      <div className={styles.cartCont}>
        {/* <Link to="/login">Login</Link> */}
        <Link to="/cartItems">
          <FaShoppingCart className={styles.cart} />
          <small className={styles.cartLength}>{cartItems.length}</small>
        </Link>
      </div>
    </div>
  );
}
