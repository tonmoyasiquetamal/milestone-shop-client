import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div>
        <img
          className="w-52"
          src="https://cutewallpaper.org/21/loading-gif-transparent-background/Bee-Hollow-Farm-beekeeping-classes-and-events-near-Schodack-.gif"
          alt="loader"
        />
      </div>
    </div>
  );
};

export default Loader;
