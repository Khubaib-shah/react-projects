import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { allProducts } from "../assets/data";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [allItems, setAllItems] = useState([]);
  const setItems = () => {
    setAllItems(allProducts);
  };
  return (
    <CartContext.Provider value={{ allItems, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
