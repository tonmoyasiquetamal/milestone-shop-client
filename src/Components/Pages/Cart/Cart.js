import React from "react";
import useCart from "../../Hooks/useCart";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Cart = () => {
  const [cart, setCart] = useCart();
  console.log(cart);
  const handleCross = (id) => {
    const existed = cart.filter((item) => item._id !== id);
    setCart(existed);
  };
  return (
    <div>
      <Navbar />
      <div className="py-12 mt-28 ">
        <h3 className="text-4xl font-medium">You Added on Cart : </h3>
        <div className="grid md:grid-cols-2 gap-5">
          {cart.map((item) => (
            <div className="flex items-center">
              <img className="w-1/3" src={item.img} alt="" />
              <div className="flex items-center">
                <div>
                  <h3 className="font-medium text-2xl"> Name : {item.name}</h3>
                  <h3 className="font-medium"> Price : {item.price}</h3>
                </div>
                <div onClick={() => handleCross(item._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 bg-red-400 text-red-800 ml-3 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
