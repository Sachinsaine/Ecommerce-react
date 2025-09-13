import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx/Navbar";
import ProductList from "./components/productList/ProductList";
import PagenotFound from "./components/pagenotfound/PagenotFound";
import Login from "./components/Login/Login";
import Dashboard from "./components/dashboard/Darshboard";
import AddedCartItemsList from "./components/addedCartItemsList/AddedCartItemsList";

function App() {
  const [productName, setProductName] = useState("");
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Navbar
        product={product}
        setProduct={setProduct}
        productName={productName}
        setProductName={setProductName}
        cartItems={cartItems}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard productName={productName} setCartItems={setCartItems} />
          }
        >
          <Route
            path="/produceDetails"
            element={<ProductList product={product} />}
          />
        </Route>
        <Route
          path="/cartItems"
          element={<AddedCartItemsList cartItems={cartItems} />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
