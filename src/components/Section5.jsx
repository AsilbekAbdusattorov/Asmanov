import React from "react";
import Img from "../img/AOS_Logo.png";

const Section5 = () => {
  return (
    <section className="bg-Section-bg py-10">
      <div className="w-full max-w-7xl mx-auto px-5">
        <h2 className="text-center text-3xl md:text-5xl lg:text-7xl py-10 md:py-20">
          Memberships and Affiliations
        </h2>
        
        {/* Logos container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-10 justify-items-center py-10">
          <img className="w-28 sm:w-32 md:w-40" src={Img} alt="Logo" />
          <img className="w-28 sm:w-32 md:w-40" src={Img} alt="Logo" />
          <img className="w-28 sm:w-32 md:w-40" src={Img} alt="Logo" />
          <img className="w-28 sm:w-32 md:w-40" src={Img} alt="Logo" />
          <img className="w-28 sm:w-32 md:w-40" src={Img} alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default Section5;
