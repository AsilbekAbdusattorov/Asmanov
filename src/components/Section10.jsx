import React from "react";

const Section10 = () => {
  return (
    <section className="bg-Section-bg px-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-[1200px] w-full bg-blue-900 py-16 sm:py-20 lg:h-[330px] flex items-center justify-center">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl text-center text-white">
            Finding Our Office in Fairfax, VA
          </h2>
        </div>

        {/* Blog Section */}
        <h3 className="text-center text-3xl sm:text-5xl lg:text-7xl mt-20">
          Read the Latest from Our Blog
        </h3>
        <p className="text-center text-lg sm:text-2xl text-blue-400">
          Posts From Our Dental Care Team
        </p>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-20">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`p-6 ${
                index === 1 ? "border-x border-gray-300" : ""
              }`}
            >
              <p className="text-lg sm:text-xl">August 16, 2024</p>
              <p className="text-xl sm:text-2xl text-blue-400">
                Do I Have Gum Disease? Look for <br /> These Symptoms and
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section10;
