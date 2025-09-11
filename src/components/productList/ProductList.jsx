import Product from "../product/Product";
import styles from "./productlist.module.css";
export default function ProductList({ productData }) {
  return (
    <div className={styles.productlistCont}>
      {/* <h1>Product list page</h1> */}
      {productData.map((product) => (
        <Product key={product.id} productItem={product} />
      ))}
    </div>
  );
}
