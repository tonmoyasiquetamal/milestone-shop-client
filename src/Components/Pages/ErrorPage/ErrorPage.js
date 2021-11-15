import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-6xl font-semibold">Oppsss ! 404 Error</h2>
        <h3 className="text-4xl font-medium my-10 text-gray-700">
          Sorry, Page Not Found
        </h3>
        <Link to="/">
          <button className="bg-gray-800 text-white px-16 py-4 rounded hover:bg-gray-200 hover:text-gray-800 transition-all">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
