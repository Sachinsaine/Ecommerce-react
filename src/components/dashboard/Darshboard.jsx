import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      let getData = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      let res = await getData.json();
      setData(res);
      setLoading(false);
      console.log(res);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello I am from Dashboard</h1>
      <Link to="produceDetails">produceDetails</Link>
      <Outlet />
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((product) => (
            <div>
              <h1 key={product.id}>{product.name}</h1>
              <img src={product.image_link} alt="" width="100" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
