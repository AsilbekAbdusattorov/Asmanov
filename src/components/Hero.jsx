import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-[50%_10%] h-screen w-full flex items-center">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="text-center md:text-end">
          <h2 className="text-4xl md:text-[72px] font-bold">Experienced Dentists</h2>
          <p className="text-xl md:text-4xl mt-2">Treating Complex Cases Since 1986</p>
          <div className="mt-10">
            <Link className="bg-blue-400 border rounded-3xl px-10 md:px-16 py-4 md:py-5 text-lg md:text-xl inline-block">
              Meet Our Doctors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
