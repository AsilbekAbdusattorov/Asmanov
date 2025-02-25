import React from "react";
import Logo from "../img/google-logo.svg";

const reviews = [
  {
    name: "Victoria Hornaday",
    year: "2022",
    rating: "⭐⭐⭐⭐⭐",
    initials: "VH",
    review:
      "I have been a client over 30 years. They have always done a great job and they offer emergency appointments on weekends which I consider a valuable service I have not found anywhere else.",
  },
  {
    name: "Victoria Hornaday",
    year: "2022",
    rating: "⭐⭐⭐⭐⭐",
    initials: "VH",
    review:
      "I have been a client over 30 years. They have always done a great job and they offer emergency appointments on weekends which I consider a valuable service I have not found anywhere else.",
  },
];

const Section3 = () => {
  return (
    <section className="bg-Section3bg bg-cover bg-no-repeat px-4">
      <div className="w-full max-w-7xl mx-auto py-5">
        <h2 className="text-4xl md:text-6xl text-center pt-16 font-bold">
          "Great experience!"
        </h2>
        <p className="text-xl md:text-3xl text-center mt-2">
          Serving All of Fairfax County
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-10">
              <div className="flex items-center">
                <div className="bg-gray-300 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                  <h2 className="text-3xl text-black">{review.initials}</h2>
                </div>
                <div className="text-black ml-5">
                  <p className="font-bold text-xl">{review.name}</p>
                  <p>{review.year}</p>
                  <p>{review.rating}</p>
                </div>
                <div className="ml-auto">
                  <img src={Logo} alt="Google Logo" className="w-10 h-10" />
                </div>
              </div>
              <p className="text-black pt-5 pb-10 text-lg">{review.review}</p>
              <p className="text-black border-b text-xl w-[170px] border-black cursor-pointer">
                View on Google
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
