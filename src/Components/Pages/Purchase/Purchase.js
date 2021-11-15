import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Purchase = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [drone, setDrone] = useState({});
  const { id } = useParams();
  const history = useHistory();
  //   console.log(id);
  useEffect(() => {
    axios
      .get(`https://murmuring-stream-81479.herokuapp.com/drones/${id}`)
      .then((res) => setDrone(res.data));
  }, [id]);

  const date = new Date();
  //purchase
  const onSubmit = (data) => {
    const confirmPurchase = window.confirm("Are you sure to purchase");
    data.orderItem = drone;
    data.status = "pending";
    data.date = date.toLocaleDateString();

    //post to database
    confirmPurchase &&
      axios
        .post("https://murmuring-stream-81479.herokuapp.com/orders", data)
        .then((res) => {
          if (res.data.insertedId) {
            alert("added successfully");
            history.push("/dashboard/my-orders");
          }
        });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 px-3 md:px-0 mt-16">
        <div className="grid md:grid-cols-2 gap-x-10">
          <div>
            <div>
              <img src={drone.img} alt={drone.name} />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-medium text-gray-800">
                {drone.name}
              </h2>
              <p className="text-md text-gray-600 ">{drone.description}</p>
              <h2 className="text-2xl font-semibold text-gray-800">
                Price : ${drone.price}
              </h2>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-3xl font-medium mb-8">
              Fill up your Information :
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 my-4">
              <div>
                <label className="text-xl " htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none"
                  id="name"
                  defaultValue={user.displayName}
                  {...register("name", { required: true })}
                />
              </div>

              <div>
                <label className="text-xl " htmlFor="email">
                  Email
                </label>
                <fieldset disabled>
                  <input
                    type="email"
                    className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none bg-gray-300"
                    id="name"
                    defaultValue={user.email}
                    {...register("email", { required: true })}
                  //   disabled
                  />
                </fieldset>
              </div>
              <div>
                <label className="text-xl " htmlFor="number">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none"
                  id="number"
                  {...register("number")}
                  placeholder="Enter Your Number"
                />
              </div>
              <div>
                <label className="text-xl " htmlFor="address">
                  Address
                </label>
                <input
                  className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none"
                  id="address"
                  placeholder="Enter Your Address"
                  {...register("address", { required: true })}
                />
                <span className="text-red-600 font-medium ">
                  {errors.address && "Address is Required"}
                </span>
              </div>

              <div>
                <label className="text-xl " htmlFor="quantity">
                  Quantity
                </label>
                <input
                  type="number"
                  className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none"
                  id="quantity"
                  defaultValue="1"
                  {...register("quantity", { required: true })}
                />
              </div>
              <input
                className=" bg-gray-800 text-white px-8 py-3 rounded inline-block"
                type="submit"
                value="Purchase"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;

/*  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="text-xl " htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none"
                  id="name"
                  defaultValue={user.displayName}
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <label className="text-xl " htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none bg-gray-300"
                  id="name"
                  defaultValue={user.email}
                  {...register("email", { required: true })}
                  disabled
                />
              </div>
              <div>
                <label className="text-xl " htmlFor="number">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none"
                  id="number"
                  {...register("number", { required: true })}
                  placeholder="Enter Your Number"
                />
              </div>
              <div>
                <label className="text-xl " htmlFor="address">
                  Address
                </label>
                <input
                  className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none"
                  id="address"
                  placeholder="Enter Your Address"
                  {...register("address", { required: true })}
                />
                <span className="text-red-600 font-medium ">
                  {errors.address && "Address is Required"}
                </span>
              </div>

              <div>
                <label className="text-xl " htmlFor="quantity">
                  Quantity
                </label>
                <input
                  type="number"
                  className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none"
                  id="quantity"
                  defaultValue="1"
                  {...register("quantity", { required: true })}
                />
              </div>
              <input
                className=" bg-gray-800 text-white px-8 py-3 rounded inline-block"
                type="submit"
                value="Purchase"
              />
              <input type="submit" />
            </form> */
