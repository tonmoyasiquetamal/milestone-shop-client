import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import promiseImg from "../../Images/relation.jfif";
import svgIcon from "../../Images/icons/shopping-cart.png";
import Footer from "../Shared/Footer/Footer";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="py-24 container mx-auto">
        <div className=" md:w-3/4 mx-auto">
          <div className=" text-center">
            <h3 className="text-4xl font-medium">Our Story</h3>
          </div>
          <div className=" grid md:grid-cols-2 gap-5 mt-6">
            <div>
              <h3 className="text-gray-500 text-xl">
                Our Shop is Launched in 2020.Drones Shop is Asia premier online
                shopping marketplace with an active presence in China,
                Bangladesh, India Etc
              </h3>
            </div>
            <div>
              <h3 className="text-gray-500 text-xl ">
                Drone shop is focused on providing an excellent customers
                experience, ease-of-purchase, comprehensive customers care and a
                hassle free shopping and returns experience .
              </h3>
            </div>
          </div>
        </div>
        <div className="md:w-3/4 mx-auto ">
          <div className=" text-center py-8">
            <h3 className="text-4xl font-medium">Our Promises</h3>
          </div>
          <div className="grid md:grid-cols-2">
            <div>
              <img src={promiseImg} alt="" />
            </div>
            <div>
              <div className="flex items-center mt-20">
                <div className="mr-4">
                  <img width="50" src={svgIcon} alt="" />
                </div>
                <div>
                  <h4 className="text-2xl font-medium">Biggest variety </h4>
                  <p className="text-gray-400">
                    We offer thousand of Drones at a great value for our
                    customers
                  </p>
                </div>
              </div>
              <div className="flex items-center my-6">
                <div className="mr-4">
                  <img width="50" src={svgIcon} alt="" />
                </div>
                <div>
                  <h4 className="text-2xl font-medium">Best Price </h4>
                  <p className="text-gray-400">
                    We provide great value bt offering competitive prices on all
                    our products
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="mr-4">
                  <img width="50" src={svgIcon} alt="" />
                </div>
                <div>
                  <h4 className="text-2xl font-medium">Fast Delivery </h4>
                  <p className="text-gray-400">
                    We try our best to our customers with fast delivery and easy
                    tracking system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
