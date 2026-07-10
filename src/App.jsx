import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./ContextProvider";
import { Homepage } from "./Homepage";
import { Navbar } from "./Navbar";
import { MyCart } from "./MyCart";
import { Wishlist } from "./Wishlist";
import { ProductDetails } from "./ProductDetails";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
        </Routes>

        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "var(--paper-dim)",
              color: "var(--text)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius)",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              padding: "12px 16px",
            },
            success: {
              iconTheme: {
                primary: "var(--accent)",
                secondary: "var(--accent-ink)",
              },
            },
            error: {
              iconTheme: { primary: "var(--sale)", secondary: "#fff" },
            },
          }}
        />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
