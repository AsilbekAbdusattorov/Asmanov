import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-[50%_10%] h-screen w-full">
      <div className="w-full max-w-7xl mx-auto py-5">
        <div className="text-end mt-40 ml-96">
          <h2 className="text-[72px]">Experienced Dentists</h2>
          <p className="text-4xl">Treating Complex Cases Since 1986</p>
          <div className="mt-16 text-end">
            {" "}
            {/* Linkni pastroqqa tushirish uchun */}
            <Link className="bg-blue-400 border rounded-3xl px-16 py-5 text-xl">
              Meet Our Doctors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
