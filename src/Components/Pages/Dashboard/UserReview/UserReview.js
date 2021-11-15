import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const UserReview = () => {
  const { user } = useAuth();
  const [err, setErr] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.userImg = user.photoURL
      ? user.photoURL
      : "https://cdn-icons-png.flaticon.com/512/64/64572.png";

    if (data.rating <= 0 || data.rating >= 5) {
      setErr("Rating value must be less than 5 or greater than 1");
    } else {
      setErr("");
      console.log(data);
      axios
        .post("https://murmuring-stream-81479.herokuapp.com/reviews", data)
        .then((res) => {
          if (res.data.insertedId) {
            alert("Review Submitted Successfully");
            reset("");
          }
        });
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-medium mb-5">Enter Your Review :</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 space-y-5">
        <div>
          <input
            className="border p-4 bg-gray-100 rounded w-full outline-none"
            defaultValue={user.displayName}
            {...register("name", { required: true })}
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-red-600 fot-medium">Name is Required </span>
          )}
        </div>
        <div>
          <input
            className="border p-4 bg-gray-100 rounded w-full outline-none"
            {...register("companyName", { required: true })}
            placeholder="Enter you Company Name"
          />
          {errors.companyName && (
            <span className="text-red-600 fot-medium">
              Company is Required{" "}
            </span>
          )}
        </div>
        <div>
          <input
            type="number"
            max="5"
            min="0"
            className="border p-4 bg-gray-100 rounded w-full outline-none"
            {...register("rating", { required: true })}
            placeholder="Rate our service in 1 - 5"
          />
          {errors.rating && (
            <span className="text-red-800 fot-medium">Rating is required</span>
          )}
          <span className="text-red-800 fot-medium">{err}</span>
        </div>
        <div>
          <textarea
            rows="8"
            className="border p-4 bg-gray-100 rounded w-full outline-none"
            {...register("textarea", { required: true })}
            placeholder="Write Your Review Here......"
          />
          {errors.textarea && (
            <span className="text-red-800 fot-medium">
              Textarea is Required
            </span>
          )}
        </div>
        <input
          className="bg-gray-800 text-white px-8 py-3 rounded cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default UserReview;
