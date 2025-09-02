import { useEffect } from "react";
import styles from "./search.module.css";
export default function Search({ setProduct }) {
  useEffect(() => {
    async function getProductData() {
      let data = await fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      let res = await data.json();
      setProduct(res);
      //   console.log(res);
    }
    getProductData();
  }, [setProduct]);
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Enter your products"
        onChange={(e) => setProduct(e.target.value)}
      />
    </div>
  );
}
