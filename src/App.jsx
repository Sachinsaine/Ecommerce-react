import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./ContextProvider";
import { Homepage } from "./Homepage";
import { Navbar } from "./Navbar";
import { MyCart } from "./MyCart";
import { Wishlist } from "./Wishlist";
import { ProductDetails } from "./ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
