import { useState } from "react";
import AddedCartItems from "../addedCartItems/AddedCartItems";
import styles from "./cartItemsList.module.css";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function AddedCartItemsList({ cartItems }) {
  const [subTotalValue, setSubTotalValue] = useState(0);
  function handleSubTotal(subTotal) {
    setSubTotalValue(subTotal);
  }
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cont}>
        {cartItems.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.myCart}>
              <IoBag className={styles.emptyCart} />
            </span>
            <h2>Your cart is empty!</h2>
            <Link to="/">
              <button className="btnn">Shop now</button>
            </Link>
          </div>
        ) : (
          <div>
            <h1>Shopping Cart</h1>
            <div className={styles.price}>
              <span>Price</span>
            </div>
            <hr />
            {cartItems.map((item) => (
              <div>
                <AddedCartItems
                  key={item.id}
                  addedItems={item}
                  cartItems={cartItems}
                  onSubTotal={handleSubTotal}
                />
              </div>
            ))}
            <div className={styles.subtotal}>
              {" "}
              Subtotal {`(${cartItems.length} items)`}: $
              {subTotalValue.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
