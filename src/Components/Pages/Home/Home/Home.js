import React from "react";
import ContactUs from "../../ContactUs/ContactUs";
import Explore from "../../Shared/Explore/Explore";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import UserReview from "../../UserReview/UserReview";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Explore showAll={false} />
      <UserReview />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
