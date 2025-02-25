import React from "react";
import Img from '../img/img1.avif'

const Section = () => {
  return (
<section className="bg-Section-bg">
      <div className="w-full max-w-7xl mx-auto py-5 px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Our Emergency Dentists Treat <br className="hidden md:block" /> Urgent Dental Health Issues
        </h2>
        <p className="text-center font-semibold text-blue-400 text-lg md:text-2xl mt-3">
          We Can Help When You Need It Most
        </p>
        
        {/* Matn va List qismi */}
        <div className="mt-10 md:mt-20 text-center">
          <h4 className="text-lg md:text-xl">
            Our dentists can address all types of dental emergencies and have a
            24/7 call center in place.{" "}
            <span className="border-b hover:border-none text-blue-400 border-blue-400 cursor-pointer">
              Contact Fairfax Family Dental Care
            </span>{" "}
            if you experience an emergency such as:
          </h4>

          {/* List */}
          <div className="flex flex-col md:flex-row justify-center mt-10 text-lg md:text-xl">
            <ul className="mb-5 md:mr-20 list-disc text-left">
              <li>A knocked-out tooth</li>
              <li>A chipped tooth that is painful</li>
            </ul>
            <ul className="list-disc text-left">
              <li>A persistent toothache</li>
              <li>
                A crown or{" "}
                <span className="border-b border-blue-400 text-blue-400 hover:border-none cursor-pointer">
                  veneer
                </span>{" "}
                that comes loose
              </li>
            </ul>
          </div>

          {/* Call Button */}
          <div className="mt-10">
            <button className="bg-blue-400 hover:bg-blue-700 rounded-3xl px-8 py-3 text-lg md:text-xl">
              Call: (703) 215-3878
            </button>
          </div>
        </div>

        {/* Blue Background Section */}
        <div className="bg-blue-900 w-full mt-20 p-5 md:p-10 text-white text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Welcome to Fairfax Family Dental Care</h2>
          <p className="text-lg md:text-3xl text-blue-400 mt-2">
            Compassionate Dentists Serving the Entire Community
          </p>

          {/* Rasm va Matn qismi */}
          <div className="flex flex-col md:flex-row items-center justify-center mt-10">
            <div className="max-w-[468px] text-left md:mr-10">
              <p className="mb-5">
                Established in 1986, Fairfax Family Dental Care offers
                comprehensive dentistry for all members of your household.
              </p>
              <p>
                Our Fairfax office is equipped with state-of-the-art technology so we can accurately diagnose conditions.
              </p>
            </div>
            <div className="mt-10 md:mt-0">
              <img className="w-[300px] md:w-[468px]" src={Img} alt="logo" />
              <p className="mt-3">
                We always do our best to make sure everyone feels welcome.
              </p>
            </div>
          </div>
        </div>

        {/* Grid qismi */}
        <div>
          <h2 className="text-center text-bold text-3xl md:text-5xl py-10 md:py-20">
            What Sets Fairfax Family Dental Care Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mb-10 md:mb-20">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-blue-900 p-5 md:p-10 text-white text-center rounded-lg">
                <h3 className="mb-3 text-lg md:text-xl font-semibold">Patient Accessibility</h3>
                <p>
                  Fairfax Family Dental Care was designed to accommodate patients with disabilities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
