import React from "react";
import img1 from "../img/4img1.avif";
import img2 from "../img/4img2.jpg";
import img3 from "../img/4img3.jpg";

const Section4 = () => {
  return (
<section className="bg-[#070C24]">
  <div className="w-full max-w-[4557px] mx-auto">
    <div className="flex mr-20">
      <img
        className="bg-cover bg-no-repeat opacity-[1] w-[900px] relative border-4 border-white shadow-lg"
        src={img1}
        alt="logo"
      />
      <div className="w-[865px] bg-blue-900 absolute ml-[620px] border-4 border-white shadow-lg">
        <div className="py-[96px] pl-[168px] pr-[96px]">
          <h2 className="text-center text-5xl mb-10 font-serif text-white">
            Charles Kirksey, DDS
          </h2>
          <p className="text-white font-serif">
            Dr. Charles D. Kirksey has provided dental care to the community
            of Fairfax, VA, for over 35 years. His experience and skill set
            help patients maximize the appearance of their smiles through
            general dentistry, orthodontics, oral surgery, and dental
            implants. Dr. Kirksey can help you achieve straighter teeth and
            an optimal bite.
          </p>
          <div className="flex justify-center">
            <button className="rounded-3xl bg-blue-400 py-3 px-3 mt-10 hover:bg-blue-900 text-white font-serif shadow-lg">
              Discover More About Dr.Charles Kirksey
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="flex mr-20">
      <div className="w-[865px] bg-blue-900 relative z-10 ml-9 border-4 border-white shadow-lg">
        <div className="py-[96px] pl-[168px] pr-[96px]">
          <h2 className="text-center text-5xl mb-10 font-serif text-white">
            Charles Kirksey, DDS
          </h2>
          <p className="text-white font-serif">
            Dr. Charles D. Kirksey has provided dental care to the community
            of Fairfax, VA, for over 35 years. His experience and skill set
            help patients maximize the appearance of their smiles through
            general dentistry, orthodontics, oral surgery, and dental
            implants. Dr. Kirksey can help you achieve straighter teeth and
            an optimal bite.
          </p>
          <div className="flex justify-center">
            <button className="rounded-3xl bg-blue-400 py-3 px-3 mt-10 hover:bg-blue-900 text-white font-serif shadow-lg">
              Discover More About Dr.Charles Kirksey
            </button>
          </div>
        </div>
      </div>
      <img
        className="bg-cover bg-no-repeat opacity-[1] w-[900px] absolute ml-[700px] border-4 border-white shadow-lg"
        src={img2}
        alt="logo"
      />
    </div>

    <div className="flex mr-20">
      <img
        className="bg-cover bg-no-repeat opacity-[1] w-[900px] relative border-4 border-white shadow-lg"
        src={img3}
        alt="logo"
      />
      <div className="w-[865px] bg-blue-900 absolute ml-[620px] border-4 border-white shadow-lg">
        <div className="py-[96px] pl-[168px] pr-[96px]">
          <h2 className="text-center text-5xl mb-10 font-serif text-white">
            Charles Kirksey, DDS
          </h2>
          <p className="text-white font-serif">
            Dr. Charles D. Kirksey has provided dental care to the community
            of Fairfax, VA, for over 35 years. His experience and skill set
            help patients maximize the appearance of their smiles through
            general dentistry, orthodontics, oral surgery, and dental
            implants. Dr. Kirksey can help you achieve straighter teeth and
            an optimal bite.
          </p>
          <div className="flex justify-center">
            <button className="rounded-3xl bg-blue-400 py-3 px-3 mt-10 hover:bg-blue-900 text-white font-serif shadow-lg">
              Discover More About Dr.Charles Kirksey
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Section4;
