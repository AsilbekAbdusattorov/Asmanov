import React from "react";
import Img from "../img/AOS_Logo.png";

const Section5 = () => {
  return (
    <section className="bg-Section-bg">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-center text-7xl py-20">Memberships and Affiliations</h2>
        <div className="flex justify-around py-20">
          <img src={Img} alt="Logo" />
          <img src={Img} alt="Logo" />
          <img src={Img} alt="Logo" />
        </div>
        <div className="flex justify-around pb-20">
          <img src={Img} alt="Logo" />
          <img src={Img} alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default Section5;
