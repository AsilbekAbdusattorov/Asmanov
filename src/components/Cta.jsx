import React from "react";

const Cta = () => {
  return (
    <div className="bg-Section-bg py-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <p className="text-3xl text-blue-400 mr-10">Rate, Review & Explore</p>
          <div className="flex space-x-3">
              <p className="bg-transparent border-blue-400 border rounded-full px-3 py-1 text-blue-400  hover:border-white text-5xl">
                G
              </p>
              <p className="bg-transparent border-blue-400 border rounded-full px-4 py-1 text-blue-400  hover:border-white text-5xl">
                F
              </p>
              <p className="bg-transparent border-blue-400 border rounded-full px-4 py-1 text-blue-400  hover:border-white text-5xl">
                X
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
