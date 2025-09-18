import { useEffect } from "react";
import styles from "./addedCartItems.module.css";
import { RiSubtractLine } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
export default function AddedCartItems({ addedItems, cartItems, onSubTotal }) {
  const subTotal = cartItems.reduce(
    (total, item) => total + Number(item.price || 0),
    0
  );
  useEffect(() => {
    if (typeof onSubTotal === "function") {
      onSubTotal(subTotal);
    }
  }, [onSubTotal, subTotal]);
  return (
    <div>
      <div>
        <div className={styles.itemContainer}>
          <div>
            <img src={addedItems.image_link} alt="" />
          </div>
          <div>
            <div className={styles.title}>{addedItems.name} </div>
            <div>{`${addedItems.description}`}</div>
            <div className={styles.colorsCont}>
              <span>Colours: </span>
              <div className={styles.colorList}>
                {addedItems.product_colors.map((color, index) => (
                  <div key={index} className={styles.colorItem}>
                    <span
                      className={styles.colorBox}
                      style={{ backgroundColor: color.hex_value }}
                    ></span>
                    {/* <span className={styles.colorName}>
                      {color.colour_name || "Unknown"}
                    </span> */}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.numberOfItems}>
              <span className={styles.icons}>
                <RiSubtractLine />
              </span>
              <span>1</span>
              <span className={styles.icons}>
                <IoAdd />
              </span>
            </div>
          </div>
          <div className={styles.price}>{`$${addedItems.price}`}</div>
        </div>
        <hr />
      </div>
    </div>
  );
}
