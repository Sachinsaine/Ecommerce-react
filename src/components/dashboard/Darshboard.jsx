import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./dashboard.module.css";
import ProductList from "../productList/ProductList";
import Loader from "../loader/Loader";
export default function Dashboard({ productName, setCartItems, cartItems }) {
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
      <Outlet />
      <div>
        {loading ? (
          // <img src={loader} alt="loading" className={styles.loader} />
          <Loader />
        ) : (
          <ProductList
            key={data.id}
            productData={data}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
          // data.map((product) => (
          // ))
        )}
      </div>
    </div>
  );
}
