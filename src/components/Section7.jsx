import React from "react";
import Img from "../img/7img1.jpg";

const Section7 = () => {
  return (
    <section className="bg-Section-bg px-4">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl lg:text-7xl pt-10 lg:pt-20">
          Our Featured
        </h2>
        <p className="text-blue-400 text-center text-xl sm:text-2xl lg:text-3xl">
          Dental Care Services
        </p>

        {/* Services Section */}
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center mt-16 lg:mt-20 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
                src={Img}
                alt="img"
              />
            </div>
            <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
              <h4 className="text-3xl sm:text-4xl lg:text-5xl text-blue-400">
                Dental Implants
              </h4>
              <p className="text-lg sm:text-xl lg:text-2xl py-6">
                A missing tooth can lead to serious health issues. The roots of
                a tooth stimulate the tissue in your jawbone, keeping it strong.
                When you lose a tooth, the lack of root structure causes your
                jawbone to deteriorate, leading to problems like further tooth
                loss and sunken facial features. Titanium or ceramic dental
                implants act as artificial tooth roots, effectively stopping
                further bone loss.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="text-xl py-4 px-6 hover:bg-blue-900 rounded-3xl bg-blue-500 text-white">
                  Learn More About Dental Implants
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Services List */}
        <div className="max-w-7xl w-full mx-auto bg-blue-900 text-white py-10 mt-20">
          <h2 className="text-3xl sm:text-5xl text-center pb-10">
            Our Complete List of Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
            {Array(15)
              .fill("Bone Grafts")
              .map((service, index) => (
                <div key={index} className="text-center border-b border-blue-400 text-blue-400 hover:border-none cursor-pointer">
                  {service}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
