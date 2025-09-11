import styles from "./product.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
export default function Product({ productItem }) {
  return (
    <div className={styles.productItem}>
      <div className={styles.productCard}>
        <img src={productItem.image_link} alt="" />
      </div>
      <div className={styles.title}>
        <p>{productItem.name}</p>
      </div>
      <p>{`${productItem.description.slice(0, 120)}...`}</p>
      <div className={styles.footerCont}>
        <span className={styles.price}>{`$${productItem.price} USD`}</span>
        <div className={styles.buttons}>
          <button>
            <FaShoppingCart /> Add to cart
          </button>
          <button>
            {" "}
            <AiFillThunderbolt /> Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
