import AddedCartItems from "../addedCartItems/AddedCartItems";
import styles from "./cartItemsList.module.css";
export default function AddedCartItemsList({ cartItems }) {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cont}>
        <h1>Shopping Cart</h1>
        <div className={styles.price}>
          <span>Price</span>
        </div>
        <hr />
        {cartItems.map((item) => (
          <AddedCartItems key={item.id} addedItems={item} />
        ))}
      </div>
    </div>
  );
}
