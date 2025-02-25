import React from "react";
import Logo from "../img/google-logo.svg";

const Section9 = () => {
  return (
    <section className="bg-9bg bg-cover bg-no-repeat px-4">
      <div className="w-full max-w-7xl mx-auto py-5">
        <h2 className="text-center text-3xl sm:text-5xl lg:text-7xl pt-16">
          "Fantastic!"
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl text-center">
          More Reviews from Fairfax County Patients
        </p>

        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
          {/* Review Card */}
          {[1, 2].map((_, index) => (
            <div key={index} className="w-full bg-white rounded-lg shadow-lg">
              <div className="p-8">
                <div className="flex items-center">
                  <div className="bg-gray-300 rounded-full w-16 h-16 flex items-center justify-center">
                    <h2 className="text-2xl text-black">VH</h2>
                  </div>
                  <div className="text-black ml-4">
                    <p className="font-bold text-lg">Victoria Hornaday</p>
                    <p className="text-sm">2022</p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                  <div className="ml-auto">
                    <img src={Logo} alt="Google Logo" className="w-10 h-10" />
                  </div>
                </div>

                <p className="text-black pt-5 pb-5 text-base sm:text-lg leading-relaxed">
                  I have been a client over 30 years. They have always done a
                  great job, and they offer emergency appointments on weekends,
                  which I consider a valuable service I have not found anywhere
                  else.
                </p>

                <p className="text-black border-b-2 border-black text-lg sm:text-xl w-max cursor-pointer">
                  View on Google
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section9;
