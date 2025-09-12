import { useEffect } from "react";
import styles from "./search.module.css";
export default function Search({ setProduct, productName, setProductName }) {
  // const [productName, setProductName] = useState("");
  const URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type";
  useEffect(() => {
    async function getProductData() {
      if (!productName) return;
      let data = await fetch(`${URL}=${productName}`);
      let res = await data.json();
      setProduct(res);
      console.log(res);
    }
    getProductData();
  }, [productName, setProduct]);
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search for products"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
    </div>
  );
}
