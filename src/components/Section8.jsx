import React from "react";

const Section8 = () => {
  return (
    <section className="bg-8bg pt-10 pb-20">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-center text-7xl">Not Your Average Dentists</h2>
        <p className="text-blue-400 text-3xl text-center pb-20">
          All the Dentistry You Need Under One Roof
        </p>
        <p className="text-center text-xl pb-10">
          Fairfax Family Dental Care offers comprehensive dental services so we
          can address all of <br /> our patients' needs under one roof. It's
          helped us build strong relationships within the <br /> community that
          last to this day. Whether you want a brighter smile or need to fix a{" "}
          <br /> damaged tooth with a custom dental crown, you can get all the
          care you need from dentists <br /> you trust. Contact our Fairfax, VA,
          dental office or give us a call to set up your next visit.
        </p>
        <div className="flex justify-center">
          <p className="text-blue-400 border-b border-blue-400 hover:border-none text-center text-5xl mb-10">
            (703) 215-3878
          </p>
        </div>
          <div className="flex justify-center">
            <button className="px-10 py-5 bg-blue-400 rounded-3xl text-xl hover:bg-blue-900">Request a Consultation</button>
          </div>
      </div>
    </section>
  );
};

export default Section8;
