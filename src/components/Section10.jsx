import React from "react";

const Section10 = () => {
  return (
    <section className="bg-Section-bg">
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-[1200px] h-[330px] w-full bg-blue-900">
          <h2 className="text-7xl text-center pt-20">
            Finding Our Office in Fairfax, VA
          </h2>
        </div>

        <h3 className="text-center text-7xl mt-40">Read the Latest from Our Blog</h3>
        <p className="text-center text-3xl text-blue-400">Posts From Our Dental Care Team</p>
        <div className="flex text-center pb-40 pt-20">
            <div>
                <p className="text-xl pr-10">August 16, 2024</p>
                <p className="text-2xl pr-10 text-blue-400">Do I Have Gum Disease? Look for <br /> These Symptoms and</p>
            </div>
            <div className="border-l border-r">
                <p className="text-xl pl-10 pr-10">August 16, 2024</p>
                <p className="text-2xl pl-10 pr-10 text-blue-400">Do I Have Gum Disease? Look for <br /> These Symptoms and</p>
            </div>
            <div>
                <p className="text-xl pl-10">August 16, 2024</p>
                <p className="text-2xl pl-10 text-blue-400">Do I Have Gum Disease? Look for <br /> These Symptoms and</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;
