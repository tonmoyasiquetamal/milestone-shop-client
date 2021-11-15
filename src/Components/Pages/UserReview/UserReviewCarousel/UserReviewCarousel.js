import React from "react";
import Rating from "react-rating";
import dummyImg from "../../../Images/icons/user.png";

const UserReviewCarousel = ({ review }) => {
  const { textarea, userImg, name, companyName, rating } = review;
  console.log(rating);
  return (
    <div className="text-center ">
      <div className="md:w-4/5 mx-auto mb-5 px-5 py-8 flex justify-center items-center review bg-gray-500 rounded relative">
        <p className=" text-white font-medium">{textarea}</p>
      </div>
      <div>
        <div>
          <img
            width="55"
            className="rounded-full mx-auto"
            src={userImg ? userImg : dummyImg}
            alt={name}
          />
        </div>
        <h4 className="text-2xl font-medium mt-2">{name}</h4>
        <h4 className="font-semibold uppercase my-1">{companyName}</h4>
        <Rating
          className="text-yellow-400 text-xl"
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          initialRating={rating}
          readonly
        />
      </div>
    </div>
  );
};

export default UserReviewCarousel;
