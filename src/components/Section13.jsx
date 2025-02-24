import React from "react";

const Section13 = () => {
  return (
    <section className="bg-13bg bg-cover bg-no-repeat">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex pb-40">
          <div className="">
            <h2 className="text-7xl mb-10 pt-20 text-center">Contact Us <br /> Today</h2>
            
            <form className="space-y-4 w-[600px]">
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

          <div className="mt-72 text-xl ml-10">
            <h3>
              "Let me tell you, as much as I hate dental work, Fairfax Family
              Dental Care has put my mind at ease with my fears. So, if you are
              like I was when it came to dental fears, do not worry. This is the
              place to go to finally take care of your dental problems." - Tim
              R.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section13;
