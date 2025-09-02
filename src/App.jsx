import { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar.jsx/Navbar";
import ProductList from "./components/productList/ProductList";

function App() {
  const [product, setProduct] = useState([]);

  return (
    <>
      <Navbar product={product} setProduct={setProduct} />
      <ProductList product={product} />
    </>
  );
}

export default App;
