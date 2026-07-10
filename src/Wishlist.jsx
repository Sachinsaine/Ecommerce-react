import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import "./index.css";
import styles from "./Wishlist.module.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    let filterWishList = wishlist.filter((item) => item.id !== id);
    setWishlist(filterWishList);
    toast.success("Removed from wishlist");
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Wishlist</h1>
        {wishlist.length > 0 && (
          <span className={styles.count}>
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"}
          </span>
        )}
      </div>

      {wishlist.length === 0 ? (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>♡</span>
          <h2 className={styles.emptyTitle}>Your wishlist is empty</h2>
          <p className={styles.emptySubtitle}>
            You have no items in your wishlist. Start adding!{" "}
          </p>

          <button onClick={() => navigate("/")} className="btn btn-primary">
            Shop Now
          </button>
        </div>
      ) : (
        <div className={styles.grid}>
          {wishlist.map((item) => (
            <article key={item.id} className={styles.card}>
              <Link to={`/productDetails/${item.id}`}>
                <div className={styles.cardImageWrap}>
                  <img
                    className={styles.cardImage}
                    src={
                      Array.isArray(item.images) ? item.images[0] : item.images
                    }
                    alt={item.title}
                    height="100"
                    width="100"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>{item.title}</h5>
                  <span className={`price ${styles.cardPrice}`}>
                    ${item.price}
                  </span>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </Link>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
