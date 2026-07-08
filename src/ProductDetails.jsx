import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";

export const ProductDetails = () => {
  const { product } = useContext(ProductContext);
  const { id } = useParams();

  const item = product.find((data) => data.id === Number(id));
  if (!product) {
    return <h1 className={styles.loading}>Loading...</h1>;
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>product details</h1>
      <div className={styles.layout}>
        <div className={styles.imageWrap}>
          <img className={styles.image} src={item.images} alt="" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{item.title}</h2>
          <div className={styles.price}>{`$${item.price}`}</div>
          <div className={styles.description}>{item.description}</div>
        </div>
      </div>
      {console.log(item)}
    </div>
  );
};
