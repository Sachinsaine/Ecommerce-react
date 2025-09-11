import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./dashboard.module.css";
import ProductList from "../productList/ProductList";
export default function Dashboard({ productName }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      let getData = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=${productName}`
      );
      let res = await getData.json();
      setData(res);
      setLoading(false);
      console.log(res);
    }

    fetchData();
  }, [productName]);

  return (
    <div className={styles.dashboardContainer}>
      <Link to="produceDetails">produceDetails</Link>
      <Outlet />
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <ProductList key={data.id} productData={data} />
          // data.map((product) => (
          // ))
        )}
      </div>
    </div>
  );
}
