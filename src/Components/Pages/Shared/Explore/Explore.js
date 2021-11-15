import axios from "axios";
import React, { useEffect, useState } from "react";
//import useAllCart from "../../../Hooks/useAllCart";
import useCart from "../../../Hooks/useCart";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SingleItemExplore from "../SingleItemExplore/SingleItemExplore";

const Explore = ({ showAll }) => {
  const [drones, setDrones] = useState([]);
  const [cart, setCart] = useCart();

  // console.log(showAll);

  useEffect(() => {
    axios
      .get(`https://murmuring-stream-81479.herokuapp.com/drones`)
      .then((res) => setDrones(res.data))
      .catch((err) => {
        console.log(err);
        setDrones([]);
      });
  }, []);

  //hanldecart

  const handleCart = (drone) => {
    // console.log(drone);
    setCart([...cart, drone]);
  };
  console.log(cart);

  return (
    <div className="mt-16">
      {showAll && <Navbar />}
      <div
        className={`container mx-auto px-3 md:px-0 ${showAll ? "py-4" : "py-12"
          }`}
      >
        <div className="text-center my-6">
          <h1 className="text-4xl font-semibold">Our Drones</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
          {(showAll ? drones : drones.slice(0, 6)).map((drone) => (
            <SingleItemExplore
              key={drone._id}
              drone={drone}
              handleCart={handleCart}
            />
          ))}
        </div>
      </div>
      {showAll && <Footer />}
    </div>
  );
};

export default Explore;
