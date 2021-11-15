import { useState } from "react";

const useAllCart = () => {
  const [cart, setCart] = useState([]);
  //   console.log(cart);
  return [cart, setCart];
};

export default useAllCart;
