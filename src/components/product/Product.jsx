import styles from "./product.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Product({ productItem, setCartItems }) {
  function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className={styles.star} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
      } else {
        stars.push(<FaRegStar key={i} className={styles.star} />);
      }
    }
    return stars;
  }
  renderStars();

  function handleAddToCart() {
    setCartItems((prev) => [...prev, productItem]);
  }
  return (
    <div className={styles.productItem}>
      <div className={styles.productCard}>
        <img src={productItem.image_link} alt="" />
      </div>
      <div className={styles.title}>
        <p>{productItem.name}</p>
      </div>
      <p>{`${productItem.description.slice(0, 120)}...`}</p>
      <div className={styles.starsCont}>
        {renderStars(productItem.rating)}{" "}
        <span className={styles.rate}>
          {productItem.rating} <small>Write a review</small>{" "}
        </span>
      </div>
      <div className={styles.footerCont}>
        <span className={styles.price}>{`$${productItem.price} USD`}</span>
        <div className={styles.buttons}>
          <button className="btnn" onClick={handleAddToCart}>
            <FaShoppingCart /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
