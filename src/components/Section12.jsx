import React from "react";

const Section12 = () => {
  return (
    <section className="bg-Section-bg">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex items-center justify-around">
          <div className="">
            <p className="text-center text-5xl text-blue-400 ">Fairfax Office</p>
            <p className="text-center text-2xl py-5">
              10611 Judicial Dr <br />
              Fairfax, VA 22030
            </p>
            <p className="text-center text-2xl">Open Today 7:00am - 7:00pm</p>
            <p className="text-center text-2xl py-5">Available by phone 24/7</p>

            <div className="flex justify-center">
              <button className="text-center text-xl py-5 px-10 bg-blue-400 hover:bg-blue-900 rounded-3xl">
                About Our Office
              </button>
            </div>
            <div className="flex justify-center py-5">
              <button className="text-center text-xl py-5 px-10 bg-blue-400 hover:bg-blue-900 rounded-3xl">
                About Our Office
              </button>
            </div>
            <div className="flex justify-center">
              <button className="text-center text-xl py-5 px-10 bg-blue-400 hover:bg-blue-900 rounded-3xl">
                About Our Office
              </button>
            </div>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8337313.055912696!2d37.618423!3d55.751244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5c6a5b5b1f%3A0x80c1a68f6a83e3e!2sRussia!5e0!3m2!1sen!2s!4v1700000000000"
              width="759"
              height="759"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section12;
