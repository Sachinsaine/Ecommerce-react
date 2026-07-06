import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./ContextProvider";
import { Homepage } from "./Homepage";
import { Navbar } from "./Navbar";
import { MyCart } from "./MyCart";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mycart" element={<MyCart />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
