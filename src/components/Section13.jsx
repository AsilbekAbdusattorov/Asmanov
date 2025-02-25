import React from "react";

const Section13 = () => {
  return (
    <section className="bg-13bg bg-cover bg-no-repeat py-16 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Kontakt form */}
          <div className="w-full lg:w-[600px] text-center lg:text-left">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl mb-10 text-white">
              Contact Us <br /> Today
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 text-xl font-bold bg-blue-500 hover:bg-blue-700 text-white rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Guvohlik matni */}
          <div className="w-full lg:w-[500px] text-white text-lg sm:text-xl lg:mt-20">
            <h3 className="italic">
              "Let me tell you, as much as I hate dental work, Fairfax Family
              Dental Care has put my mind at ease with my fears. So, if you are
              like I was when it came to dental fears, do not worry. This is the
              place to go to finally take care of your dental problems."  
              <span className="block mt-4 font-bold">- Tim R.</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section13;
