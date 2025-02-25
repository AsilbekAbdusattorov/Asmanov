import React from "react";
import Img from '../img/11img.avif';

const Section11 = () => {
  return (
    <section className="bg-8bg py-10 sm:py-20 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Rasm */}
          <img 
            className="w-full max-w-[300px] h-auto md:h-[327px] object-cover" 
            src={Img} 
            alt="Img" 
          />

          {/* Matn qismi */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl pb-3">
              Fairfax Family Dental <br className="hidden md:block" /> Care
            </h2>
            <p className="text-lg sm:text-xl">
              Our team of compassionate dental professionals uses
              state-of-the-art technology for every procedure we offer. As the
              premier emergency dentists in Fairfax, we are here to offer relief
              at any time of day or night, seven days a week. Our dentists are
              affiliated with professional associations including:
            </p>

            {/* Ro‘yxatlar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-left">
              <ul className="text-lg sm:text-xl space-y-2">
                <li className="list-disc">American Dental Association</li>
                <li className="list-disc">American Academy of Implant Dentistry</li>
              </ul>
              <ul className="text-lg sm:text-xl space-y-2">
                <li className="list-disc">The American Orthodontic Society</li>
                <li className="list-disc">Virginia Dental Association</li>
              </ul>
            </div>

            {/* Bog‘lanish qismi */}
            <p className="text-lg sm:text-xl mt-5">
              To schedule an appointment or receive immediate dental care, call: 
              <br className="sm:hidden" /> <span className="font-bold">(703) 215-3878</span> or contact us online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section11;
