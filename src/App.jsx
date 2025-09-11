import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx/Navbar";
import ProductList from "./components/productList/ProductList";
import PagenotFound from "./components/pagenotfound/PagenotFound";
import Login from "./components/Login/Login";
import Dashboard from "./components/dashboard/Darshboard";

function App() {
  const [productName, setProductName] = useState("");
  const [product, setProduct] = useState([]);
  return (
    <BrowserRouter>
      <Navbar
        product={product}
        setProduct={setProduct}
        productName={productName}
        setProductName={setProductName}
      />
      <Routes>
        <Route path="/" element={<Dashboard productName={productName} />}>
          <Route
            path="/produceDetails"
            element={<ProductList product={product} />}
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
