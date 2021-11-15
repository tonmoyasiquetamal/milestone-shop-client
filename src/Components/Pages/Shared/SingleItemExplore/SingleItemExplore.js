import React from "react";
import { Link } from "react-router-dom";

const SingleItemExplore = ({ drone, handleCart }) => {
  const { name, img, description, price, _id } = drone;
  return (
    <div className="border-2 border-indigo-300 p-3 rounded shadow-md">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="space-y-2">
        <h3 className="text-3xl font-medium">{name}</h3>
        <p className="text-gray-600">{description.slice(0, 200)}...</p>
        <h4 className="text-xl font-bold">Price : ${price}</h4>
        <div className="flex">
          <Link to={`/purchase/${_id}`}>
            <button className="my-5 border-2 border-green font-medium px-3 py-2 hover:bg-yellow-300 hover:text-white transition-all">
              Show Details
            </button>
          </Link>
          <button
            onClick={() => handleCart(drone)}
            className="my-5 border-2 border-blue font-medium px-3 py-2 hover:bg-pink-300 hover:text-white transition-all flex items-center ml-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItemExplore;
