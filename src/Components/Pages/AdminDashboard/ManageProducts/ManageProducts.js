import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    axios
      .get("https://murmuring-stream-81479.herokuapp.com/drones")
      .then((res) => {
        setProducts(res.data);
        setLoader(false);
      });
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`https://murmuring-stream-81479.herokuapp.com/drones/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          alert("deleted Successfully");
          const existedProducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(existedProducts);
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-medium mb-6">
        Manage All products from here
      </h2>
      {loader ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 gap-3">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col md:flex-row items-center border bg-white rounded"
            >
              <div className="border-r md:w-1/3">
                <img src={product.img} alt="" />
              </div>
              <div className="md:w-2/3 space-y-2 p-2">
                <h2 className="text-xl font-medium">{product.name}</h2>
                <h2 className="text-md text-gray-600">
                  {product.description.slice(0, 150)}...
                </h2>
                <div className="flex justify-between items-center font-medium">
                  <h2 className="text-md ">Total Price :${product.price}</h2>
                </div>
                <div>
                  <Link to={`/admin-dashboard/manage-products/${product._id}`}>
                    <button className=" mr-5 text-green-800 bg-green-300 px-5 py-2 font-medium hover:bg-white hover:text-green-800 transition-all">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="text-red-800 bg-red-300 px-5 py-2 font-medium hover:bg-white hover:text-red-800 transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
