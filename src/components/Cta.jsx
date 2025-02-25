import React from "react";

const Cta = () => {
  return (
    <div className="bg-Section-bg py-16 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-2xl sm:text-3xl text-blue-400 text-center md:text-left">
            Rate, Review & Explore
          </p>
          
          <div className="flex space-x-3">
            {["G", "F", "X"].map((icon, index) => (
              <p
                key={index}
                className="flex items-center justify-center w-14 h-14 border-2 border-blue-400 rounded-full text-blue-400 text-3xl hover:border-white transition"
              >
                {icon}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
