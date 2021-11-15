import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import axios from "axios";
import "./userReview.css";
import UserReviewCarousel from "./UserReviewCarousel/UserReviewCarousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const UserReview = () => {
  const [reviews, setReview] = useState([]);
  // console.log(reviews);
  useEffect(() => {
    axios
      .get("https://murmuring-stream-81479.herokuapp.com/reviews")
      .then((res) => setReview(res.data));
  }, []);
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-4xl font-semibold">Our Customers Reviews</h3>
        </div>
        <Carousel responsive={responsive} itemClass=" mr-3">
          {reviews.map((review) => (
            <UserReviewCarousel key={review._id} review={review} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default UserReview;
