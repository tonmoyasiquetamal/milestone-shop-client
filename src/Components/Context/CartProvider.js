import React, { createContext } from "react";
import useAllCart from "../Hooks/useAllCart";

export const cartContext = createContext(null);
const CartProvider = ({ children }) => {
  return (
    <cartContext.Provider value={useAllCart()}>{children}</cartContext.Provider>
  );
};

export default CartProvider;
