import React from "react";

const Section12 = () => {
  return (
    <section className="bg-Section-bg py-10 px-4">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Matn qismi */}
          <div className="text-center lg:text-left">
            <p className="text-3xl sm:text-5xl text-blue-400">Fairfax Office</p>
            <p className="text-lg sm:text-2xl py-5">
              10611 Judicial Dr <br />
              Fairfax, VA 22030
            </p>
            <p className="text-lg sm:text-2xl">Open Today 7:00am - 7:00pm</p>
            <p className="text-lg sm:text-2xl py-5">Available by phone 24/7</p>

            {/* Tugmalar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="text-xl py-3 px-6 bg-blue-400 hover:bg-blue-900 text-white rounded-3xl">
                About Our Office
              </button>
              <button className="text-xl py-3 px-6 bg-blue-400 hover:bg-blue-900 text-white rounded-3xl">
                Contact Us
              </button>
            </div>
          </div>

          {/* Google Maps */}
          <div className="w-full max-w-[500px] h-[300px] sm:h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8337313.055912696!2d37.618423!3d55.751244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5c6a5b5b1f%3A0x80c1a68f6a83e3e!2sRussia!5e0!3m2!1sen!2s!4v1700000000000"
              className="w-full h-full rounded-lg border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section12;
