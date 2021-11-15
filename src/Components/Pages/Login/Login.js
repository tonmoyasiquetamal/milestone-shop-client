import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import googleIcons from "../../Images/icons/google.png";
import logo from "../../Images/logo.png";

const Login = () => {
  const { LogInUsingGoogle, logInUsingEmail, error, isLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const destination = location.state?.from || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    logInUsingEmail(data.email, data.password, history, destination);
  };
  return (
    <div className="min-h-screen flex justify-center items-center px-4 md:px-0 relative">
      <div className="w-full md:w-2/5 lg:w-2/6 bg-gray-200 text-center px-5 py-7 rounded shadow-md">
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
                type="email"
                className="w-full p-3 rounded outline-none "
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 font-semibold ">
                  Email field is required
                </span>
              )}
            </div>
            <div>
              <input
                type="password"
                className="w-full p-3 rounded outline-none "
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600 font-semibold">
                  Password field is required
                </span>
              )}
            </div>
            <span className="text-red-600 font-semibold">{error}</span>
            <input
              type="submit"
              value="Login"
              className=" w-full p-3 rounded bg-gray-800 font-medium text-white"
            />
          </form>
          <h2 className="font-medium my-8">
            Don't Have Any Account ?
            <Link to="register">
              <span className="text-blue-800"> Register here</span>
            </Link>
          </h2>
          <div className="my-6">
            <div className="w-full h-1 bg-black rounded"></div>
            <span className="bg-gray-200 relative bottom-4 px-2  font-medium text-xl">
              Or
            </span>
          </div>
          <div
            onClick={() => LogInUsingGoogle(history, destination)}
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

export default Login;
