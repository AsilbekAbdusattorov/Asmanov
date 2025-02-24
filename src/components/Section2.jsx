import React from "react";
import Img from "../img/img1.avif";

const Section2 = () => {
  return (
    <section className="bg-blue-900">
      <div className="w-full max-w-7xl mx-auto py-5">
        <h2 className="text-7xl text-center mb-5">
          Free Consultations for New Patients
        </h2>
        <p className="text-center text-3xl text-blue-400">
          Book an Appointment Today
        </p>
        <div className="flex mt-10 justify-around">
          <div className="w-[552px]">
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
            <p className="text-center text-5xl text-blue-600 font-bold mt-[90px]">
              (703) 215-3878
            </p>
          </div>
          <div className="w-[552px]">
            <img src={Img} alt="logo" />
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-20">
          <button className="text-xl text-center py-5 hover:bg-blue-700 px-10 rounded-[30px] bg-blue-400">
            Request a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
