import React from "react";
import Img from '../img/11img.avif'

const Section11 = () => {
  return (
    <section className="bg-8bg py-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex"> 
          <img className="h-[327px] w-[300px]" src={Img} alt="Img" />
          <div className="ml-10">
            <h2 className="text-7xl pb-3">Fairfax Family Dental <br /> Care</h2>
            <p className="text-xl">
              Our team of compassionate dental professionals uses
              state-of-the-art technology for every procedure we offer. As the
              premier emergency dentists in Fairfax, we are here to offer relief
              at any time of day or night, seven days a week. Our dentists are
              affiliated with professional associations including:
            </p>
            <div className="flex">
              <ul className="ml-5 text-xl mt-10">
                <li className="list-disc py-2">American Dental Association</li>
                <li className="list-disc py-2">American Academy of Implant Dentistry</li>
              </ul>
              <ul className="ml-40 text-xl mt-10">
                <li className="list-disc py-2">The American Orthodontic Society</li>
                <li className="list-disc py-2">Virginia Dental Association</li>
              </ul>
            </div>
            <p className="text-xl mt-5">To schedule an appointment or receive immediate dental care, call: (703) 215-3878 or contact us online.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section11;
