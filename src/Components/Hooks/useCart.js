import { useContext } from "react";
import { cartContext } from "../Context/CartProvider";

const useCart = () => {
  return useContext(cartContext);
};
export default useCart;
