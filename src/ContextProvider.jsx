import { ProductContext } from "./ProductContext";
import { useEffect, useReducer, useState } from "react";

let initialValue = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, cart: [...state.cart, action.payload] };
    case "increament":
      return {...state, cart: [...state.cart, action.payload]};
    case "decrement":
      const index =  state.cart.findIndex((item)=> item.id === action.payload)
      return {...state, 
        
      }
    default:
      state;
  }
};

export const ContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialValue);

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
      value={{ product, setProduct, loading, cart: state.cart, dispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};
