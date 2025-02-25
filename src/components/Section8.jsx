import React from "react";

const Section8 = () => {
  return (
    <section className="bg-8bg pt-10 pb-20 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-center text-3xl sm:text-5xl lg:text-7xl">
          Not Your Average Dentists
        </h2>
        <p className="text-blue-400 text-xl sm:text-2xl lg:text-3xl text-center pb-10">
          All the Dentistry You Need Under One Roof
        </p>
        
        {/* Matnlar */}
        <div className="text-center text-base sm:text-lg lg:text-xl pb-10 leading-relaxed">
          <p>
            Fairfax Family Dental Care offers comprehensive dental services so 
            we can address all of our patients' needs under one roof. It's helped 
            us build strong relationships within the community that last to this day.
          </p>
          <p className="mt-4">
            Whether you want a brighter smile or need to fix a damaged tooth with 
            a custom dental crown, you can get all the care you need from dentists 
            you trust.
          </p>
          <p className="mt-4">
            Contact our Fairfax, VA, dental office or give us a call to set up your next visit.
          </p>
        </div>

        {/* Telefon raqami */}
        <div className="flex justify-center">
          <p className="text-blue-400 border-b border-blue-400 hover:border-none text-center text-2xl sm:text-3xl lg:text-5xl mb-10">
            (703) 215-3878
          </p>
        </div>

        {/* Tugma */}
        <div className="flex justify-center">
          <button className="px-6 sm:px-10 py-3 sm:py-5 bg-blue-400 rounded-3xl text-lg sm:text-xl hover:bg-blue-900">
            Request a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section8;
