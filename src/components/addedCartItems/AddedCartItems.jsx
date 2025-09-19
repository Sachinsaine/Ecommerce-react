import { useEffect, useState } from "react";
import styles from "./addedCartItems.module.css";
import { RiSubtractLine } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

export default function AddedCartItems({ addedItems, cartItems, onSubTotal }) {
  const [count, setCount] = useState(1);

  const subTotal = cartItems.reduce(
    (total, item) => total + Number(item.price || 0) * (item.quantity || 1),
    0
  );

  useEffect(() => {
    if (typeof onSubTotal === "function") {
      onSubTotal(count);
    }
  }, [onSubTotal, subTotal]);

  const increment = () => {
    setCount((prev) => prev + 1);
    toast("Wow so easy!", {
      autoClose: 2000,
    });
  };

  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div>
      <div>
        <div className={styles.itemContainer}>
          <div>
            <img src={addedItems.image_link} alt={addedItems.name} />
          </div>
          <div>
            <div className={styles.title}>{addedItems.name}</div>
            <div>{addedItems.description}</div>

            <div className={styles.colorsCont}>
              <span>Colours: </span>
              <div className={styles.colorList}>
                {addedItems.product_colors.map((color, index) => (
                  <div key={index} className={styles.colorItem}>
                    <span
                      className={styles.colorBox}
                      style={{ backgroundColor: color.hex_value }}
                    ></span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.numberOfItems}>
              <span>
                <RiSubtractLine className={styles.icons} onClick={decrement} />
              </span>
              <span className={styles.noOfItems}>{count}</span>
              <span>
                <IoAdd className={styles.icons} onClick={increment} />
              </span>
            </div>
          </div>

          <div className={styles.price}>
            ${(Number(addedItems.price) * count).toFixed(2)}
          </div>
        </div>
        <hr />
      </div>
      <ToastContainer />
    </div>
  );
}
