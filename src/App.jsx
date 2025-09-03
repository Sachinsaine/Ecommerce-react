import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx/Navbar";
import ProductList from "./components/productList/ProductList";

function App() {
  const [product, setProduct] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navbar product={product} setProduct={setProduct} />}
        />
        <Route
          path="/produceDetails"
          element={<ProductList product={product} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
