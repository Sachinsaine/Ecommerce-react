import { useContext } from "react";
import "./index.css";
import styles from "./Navbar.module.css";
import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { cart, input, setInput } = useContext(ProductContext);
  return (
    <header className={styles.nav}>
      <div className={styles.nav__row}>
        {/* Mobile menu toggle — pure CSS checkbox hack, no JS */}
        <input
          type="checkbox"
          id="nav-toggle"
          className={styles["nav__toggle-input"]}
        />

        <Link to="/" className={styles.nav__logo}>
          <span className={styles["nav__logo-mark"]}>S</span>
          <span className={styles["nav__logo-word"]}>
            Satisfy<span className={styles["nav__logo-dot"]}>.</span>
          </span>
        </Link>

        <form className={styles.nav__search} role="search">
          <input
            className={styles["nav__search-input"]}
            type="search"
            placeholder="Search products, brands, categories…"
            aria-label="Search products"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className={styles["nav__search-btn"]}
            type="submit"
            aria-label="Search"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <circle
                cx="11"
                cy="11"
                r="7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </form>

        <div className={styles.nav__actions}>
          <Link
            to="/whishlist"
            className={styles["nav__icon-btn"]}
            aria-label="Account"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <circle
                cx="12"
                cy="8"
                r="3.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M4.5 20c1.4-4 4.2-6 7.5-6s6.1 2 7.5 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span className={styles["nav__icon-label"]}>Account</span>
          </Link>

          <a
            href="/wishlist"
            className={styles["nav__icon-btn"]}
            aria-label="Wishlist"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M12 20.2s-7.6-4.6-9.9-9.1C.6 7.7 2.2 4.4 5.4 3.7c2-.4 3.9.5 5 2.1a1 1 0 0 0 1.6 0c1.1-1.6 3-2.5 5-2.1 3.2.7 4.8 4 3.3 7.4-2.3 4.5-9.9 9.1-9.9 9.1z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles["nav__icon-label"]}>Wishlist</span>
          </a>

          <Link
            to="/mycart"
            className={`${styles["nav__icon-btn"]} ${styles.nav__cart}`}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M3 4h2.2l1 12.4a2 2 0 0 0 2 1.8h8.6a2 2 0 0 0 2-1.7l1.1-7.5H6.4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9.5" cy="21" r="1.4" fill="currentColor" />
              <circle cx="17" cy="21" r="1.4" fill="currentColor" />
            </svg>
            <span className={styles["nav__cart-badge"]}>{cart.length}</span>
            <span className={styles["nav__icon-label"]}>Cart</span>
          </Link>
        </div>

        <label
          htmlFor="nav-toggle"
          className={styles.nav__burger}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* Category strip — collapses into the mobile drawer via CSS */}
        {/* <nav className={styles.nav__categories} aria-label="Product categories">
          <a
            href="/category/new"
            className={`${styles["nav__cat-link"]} ${styles["nav__cat-link--accent"]}`}
          >
            New In
          </a>
          <a href="/category/women" className={styles["nav__cat-link"]}>
            Women
          </a>
          <a href="/category/men" className={styles["nav__cat-link"]}>
            Men
          </a>
          <a href="/category/electronics" className={styles["nav__cat-link"]}>
            Electronics
          </a>
          <a href="/category/home" className={styles["nav__cat-link"]}>
            Home &amp; Living
          </a>
          <a href="/category/beauty" className={styles["nav__cat-link"]}>
            Beauty
          </a>
          <a
            href="/sale"
            className={`${styles["nav__cat-link"]} ${styles["nav__cat-link--sale"]}`}
          >
            Sale
          </a>
        </nav> */}
      </div>
    </header>
  );
};

export default Navbar;
