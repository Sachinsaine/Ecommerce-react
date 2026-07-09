import { ProductContext } from "./ProductContext";
import { useEffect, useReducer, useState } from "react";

let initialValue = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, cart: [...state.cart, action.payload] };

    case "increment":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "decrement": {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload,
      );

      if (index === -1) return state;

      return {
        ...state,
        cart: state.cart.filter((_, i) => i !== index),
      };
    }
    default:
      state;
  }
};

export const ContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [input, setInput] = useState("");
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const getData = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await getData.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    getProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        loading,
        cart: state.cart,
        dispatch,
        input,
        setInput,
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
