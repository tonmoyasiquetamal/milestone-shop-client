import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import googleIcons from "../../../Images/icons/google.png";
import logo from "../../../Images/logo.png";

const Register = () => {
  const { RegisterUsingEmail, LogInUsingGoogle, error, setError, isLoading } =
    useAuth();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      setError("Password Not matched");
    } else {
      setError("");
      RegisterUsingEmail(data.email, data.password, data.name, history);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center px-4 md:px-0 relative">
      <div className=" w-full md:w-2/5 lg:w-2/6 bg-gray-200 text-center px-5 py-7 rounded shadow-md">
        <div>
          <Link to="/">
            <img className="mx-auto" width="300" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-medium">Log in Here</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 my-4">
            <div>
              <input
                className="w-full p-3 rounded"
                placeholder="Enter Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600 font-semibold">
                  Name field is required
                </span>
              )}
            </div>
            <div>
              <input
                type="email"
                className="w-full p-3 rounded"
                placeholder="Enter Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 font-semibold">
                  Email field is required
                </span>
              )}
            </div>
            <div>
              <input
                type="password"
                className="w-full p-3 rounded"
                placeholder="Enter Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600 font-semibold">
                  Password field is required
                </span>
              )}
            </div>
            <div>
              <input
                type="password"
                className="w-full p-3 rounded"
                placeholder="Retype your password"
                {...register("password2", { required: true })}
              />
              {errors.password2 && (
                <span className="text-red-600 font-semibold">
                  Password field is required
                </span>
              )}
            </div>

            <span className="text-red-600 font-semibold">{error}</span>
            <input
              type="submit"
              value="Register"
              className=" w-full p-3 rounded bg-gray-800 font-medium text-white"
            />
          </form>
          <h2 className="font-medium my-8">
            Already Have an Account ?
            <Link to="login">
              <span className="text-blue-800"> Login here</span>
            </Link>
          </h2>
          <div className="my-6">
            <div className="w-full h-1 bg-black rounded"></div>
            <span className="bg-gray-200 relative bottom-4 px-2  font-medium text-xl">
              Or
            </span>
          </div>
          <div
            onClick={() => LogInUsingGoogle(history, "/")}
            className="flex justify-center items-center relative bg-white rounded-full py-3 cursor-pointer"
          >
            <img className="w-10 absolute left-2" src={googleIcons} alt="" />
            <h2 className="font-medium">Continue With Google</h2>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="absolute flex justify-center items-center w-full h-full">
          <div>
            <img
              width="150"
              src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
