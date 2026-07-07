import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import "./index.css";
import styles from "./MyCart.module.css";

export const MyCart = () => {
  const { cart, dispatch } = useContext(ProductContext);
  let total = cart.reduce((acc, curr) => acc + curr.price, 0);

  const uniqueCart = cart.filter(
    (item, index, self) => index === self.findIndex((p) => p.id === item.id),
  );

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Cart</h1>
        {cart.length > 0 && (
          <span className={styles.count}>
            {cart.length} {cart.length === 1 ? "item" : "items"}
          </span>
        )}
      </div>

      {cart.length === 0 ? (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🛒</span>

          <h2 className={styles.emptyTitle}>Your cart is empty</h2>
          <p className={styles.emptySubtitle}>
            Looks like you haven't added anything yet.
          </p>
          <a href="/" className="btn btn-primary">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className={styles.layout}>
          <ul className={styles.list}>
            {uniqueCart.map((item) => (
              <div>
                <li key={item.id} className={styles.row}>
                  <img
                    className={styles.rowImage}
                    src={
                      Array.isArray(item.images) ? item.images[0] : item.images
                    }
                    alt={item.title}
                    width="100"
                    height="100"
                  />
                  <div className={styles.rowBody}>
                    <h3 className={styles.rowTitle}>{item.title}</h3>
                    <span className={`price ${styles.rowPrice}`}>
                      ${item.price}
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "decrement",
                          payload: item.id,
                        })
                      }
                    >
                      -
                    </button>

                    <span>
                      {cart.filter((product) => product.id === item.id).length}
                    </span>

                    <button
                      onClick={() =>
                        dispatch({
                          type: "increment",
                          payload: item,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </li>
              </div>
            ))}
          </ul>

          <aside className={styles.summary}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span className="price">${total.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>

              <span className={styles.summaryMuted}>
                <b>Free</b>
              </span>
            </div>
            <div className={styles.summaryDivider} />
            <div className={styles.summaryRow}>
              <span className={styles.summaryTotalLabel}>Total</span>
              <span className={`price ${styles.summaryTotal}`}>
                ${total.toFixed(2)}
              </span>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "16px" }}
            >
              Checkout
            </button>
          </aside>
        </div>
      )}
    </div>
  );
};
