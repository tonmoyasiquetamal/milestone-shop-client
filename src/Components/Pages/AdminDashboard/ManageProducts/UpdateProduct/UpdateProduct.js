import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`https://murmuring-stream-81479.herokuapp.com/drones/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);
  const onSubmit = (data) => {
    axios
      .put(`https://murmuring-stream-81479.herokuapp.com/drones/${id}`, data)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          alert("changed successfully");
          setProduct(data);
        }
      });
  };
  return (
    <div>
      <div className="flex items-center mb-6">
        <svg
          onClick={() => history.goBack()}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-5 cursor-pointer hover:text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>

        <h2 className="text-3xl font-medium ">Update Your Product</h2>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2">
          <img src={product.img} alt={product.name} />
          <div className="mt-4">
            <h4 className="text-3xl font-medium">{product.name}</h4>
            <h4 className="font-medium my-2">Price : ${product.price}</h4>
            <h4>{product.description}</h4>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-medium mb-10">Enter Update Value Here</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                className="w-full p-3"
                defaultValue={product.name}
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <input
                className="w-full p-3"
                defaultValue={product.img}
                {...register("img", { required: true })}
                placeholder="changed image url"
              />
            </div>
            <div>
              <input
                className="w-full p-3"
                defaultValue={product.price}
                {...register("price", { required: true })}
                placeholder="Enter price here"
              />
            </div>
            <div>
              <input
                className="w-full p-3"
                defaultValue={product.description}
                {...register("description", { required: true })}
                placeholder="Enter Description here"
              />
            </div>

            <input
              className="px-6 py-2 bg-gray-800 text-white cursor-pointer hover:text-gray-800 hover:bg-white transition-all"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
