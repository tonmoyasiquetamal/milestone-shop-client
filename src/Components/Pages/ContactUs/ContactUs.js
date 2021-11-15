import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    alert("successfully Sended Message !");
    reset("");
  };
  return (
    <div className="container mx-auto py-12 px-3 md:px-0">
      <div className="text-center">
        <h2 className="text-4xl font-medium">Have Some Any Question ?</h2>
        <h4 className="text-xl font-medium mt-3 mb-8 text-yellow-500">
          Message Us
        </h4>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-full p-3 border border-gray-300 rounded 
            focus:border-gray-800 outline-none"
            {...register("name")}
            placeholder="Enter your name"
          />
          <input
            className="w-full p-3 border border-gray-300 my-5 rounded focus:border-gray-800 outline-none"
            {...register("email")}
            placeholder="Enter your email"
          />
          <input
            className="w-full p-3 border border-gray-300 rounded focus:border-gray-800 outline-none"
            {...register("subject")}
            placeholder="Subject"
          />
          <textarea
            rows="10"
            className="w-full p-3 border border-gray-300 my-5 rounded focus:border-gray-800 outline-none"
            {...register("textarea")}
            placeholder="message....."
          />

          <input
            className="px-10 py-3 bg-gray-800 font-medium text-white hover:text-gray-700 hover:bg-gray-200 transition-all"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
