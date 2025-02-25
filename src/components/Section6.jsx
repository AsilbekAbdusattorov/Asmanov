import React from "react";

const Section6 = () => {
  return (
    <section className="bg-6bg bg-cover bg-no-repeat py-10 px-5">
      <div className="w-full max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl lg:text-7xl pt-10 md:pt-20">
          Our Dentists Will Put You at <br className="hidden md:block" /> Ease
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-5 md:mb-10 text-center">
          A Patient Shares Her Story
        </p>

        {/* First paragraph */}
        <p className="text-lg md:text-2xl text-center mb-5 leading-relaxed md:leading-9">
          My parents were visiting from out of town and my father mentioned
          severe tooth pain, so we called and got an appointment for early
          the next morning.
        </p>

        {/* Second paragraph */}
        <p className="text-lg md:text-2xl text-center mb-5 leading-relaxed md:leading-9">
          Dr. Kamali and the entire staff were incredibly kind and professional
          to my father, who was very nervous they would lecture or judge him
          based on the state of the tooth. They made him comfortable and worked
          swiftly to relieve his pain. Thank you!
        </p>

        {/* Author */}
        <p className="text-center text-base md:text-xl mb-10 md:mb-20">
          - Patricia Simpson Rausch
        </p>

        {/* Button */}
        <div className="flex justify-center pb-10 md:pb-20">
          <button className="text-black bg-white py-3 px-6 md:py-5 md:px-10 rounded-3xl font-bold shadow-lg hover:bg-gray-200">
            Read on Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section6;
