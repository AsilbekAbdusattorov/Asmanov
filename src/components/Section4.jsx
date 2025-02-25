import React from "react";
import img1 from "../img/4img1.avif";
import img2 from "../img/4img2.jpg";
import img3 from "../img/4img3.jpg";

const Section4 = () => {
  return (
    <section className="bg-[#070C24] py-10">
      <div className="w-full max-w-7xl mx-auto px-5">
        {/* First Block */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            className="w-full max-w-[900px] border-4 border-white shadow-lg"
            src={img1}
            alt="Dr. Charles Kirksey"
          />
          <div className="bg-blue-900 p-10 border-4 border-white shadow-lg">
            <h2 className="text-center text-3xl md:text-5xl mb-5 text-white">
              Charles Kirksey, DDS
            </h2>
            <p className="text-white">
              Dr. Charles D. Kirksey has provided dental care to the community
              of Fairfax, VA, for over 35 years. His experience and skill set
              help patients maximize the appearance of their smiles through
              general dentistry, orthodontics, oral surgery, and dental
              implants. Dr. Kirksey can help you achieve straighter teeth and
              an optimal bite.
            </p>
            <div className="flex justify-center">
              <button className="rounded-3xl bg-blue-400 py-3 px-5 mt-5 hover:bg-blue-700 text-white shadow-lg">
                Discover More About Dr. Charles Kirksey
              </button>
            </div>
          </div>
        </div>

        {/* Second Block */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          <div className="bg-blue-900 p-10 border-4 border-white shadow-lg">
            <h2 className="text-center text-3xl md:text-5xl mb-5 text-white">
              Charles Kirksey, DDS
            </h2>
            <p className="text-white">
              Dr. Charles D. Kirksey has provided dental care to the community
              of Fairfax, VA, for over 35 years. His experience and skill set
              help patients maximize the appearance of their smiles through
              general dentistry, orthodontics, oral surgery, and dental
              implants. Dr. Kirksey can help you achieve straighter teeth and
              an optimal bite.
            </p>
            <div className="flex justify-center">
              <button className="rounded-3xl bg-blue-400 py-3 px-5 mt-5 hover:bg-blue-700 text-white shadow-lg">
                Discover More About Dr. Charles Kirksey
              </button>
            </div>
          </div>
          <img
            className="w-full max-w-[900px] border-4 border-white shadow-lg"
            src={img2}
            alt="Dr. Charles Kirksey"
          />
        </div>

        {/* Third Block */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          <img
            className="w-full max-w-[900px] border-4 border-white shadow-lg"
            src={img3}
            alt="Dr. Charles Kirksey"
          />
          <div className="bg-blue-900 p-10 border-4 border-white shadow-lg">
            <h2 className="text-center text-3xl md:text-5xl mb-5 text-white">
              Charles Kirksey, DDS
            </h2>
            <p className="text-white">
              Dr. Charles D. Kirksey has provided dental care to the community
              of Fairfax, VA, for over 35 years. His experience and skill set
              help patients maximize the appearance of their smiles through
              general dentistry, orthodontics, oral surgery, and dental
              implants. Dr. Kirksey can help you achieve straighter teeth and
              an optimal bite.
            </p>
            <div className="flex justify-center">
              <button className="rounded-3xl bg-blue-400 py-3 px-5 mt-5 hover:bg-blue-700 text-white shadow-lg">
                Discover More About Dr. Charles Kirksey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
