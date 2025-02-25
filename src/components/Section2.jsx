import React from "react";
import Img from "../img/img1.avif";

const Section2 = () => {
  return (
    <section className="bg-blue-900 px-4">
      <div className="w-full max-w-7xl mx-auto py-5">
        <h2 className="text-4xl md:text-6xl text-center mb-5 font-bold">
          Free Consultations for New Patients
        </h2>
        <p className="text-center text-xl md:text-3xl text-blue-400">
          Book an Appointment Today
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="w-full text-center md:text-left">
            <p>
              Our dentists welcome new patients from all over the greater
              Fairfax, VA, area. Consultations are free for first-time guests of
              Fairfax Family Dental Care so we can get to know your smile before
              suggesting any treatment options. (Note: the use of dental X-rays
              and CBCT imaging during a visit may incur a fee.)
            </p>
            <p className="py-5">
              This complimentary consultation is a chance for you to get a sense
              of what Fairfax Family Dental Care has to offer. We look forward
              to your visit.
            </p>
            <p>
              To set up an appointment, contact our Fairfax dental office
              online. You can also give our office a call at:
            </p>
            <p className="text-center text-3xl md:text-5xl text-blue-600 font-bold mt-10">
              (703) 215-3878
            </p>
          </div>
          <div className="w-full flex justify-center">
            <img src={Img} alt="logo" className="w-full max-w-[500px] rounded-lg" />
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-20">
          <button className="text-lg md:text-xl text-center py-4 px-6 md:py-5 md:px-10 rounded-[30px] bg-blue-400 hover:bg-blue-700">
            Request a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
