import React from "react";
import Img from '../img/img1.avif'

const Section = () => {
  return (
    <section className="bg-Section-bg">
      <div className="w-full max-w-7xl mx-auto py-5">
        <h2 className="text-5xl font-bold text-center">
          Our Emergency Dentists Treat <br /> Urgent Dental Health Issues
        </h2>
        <p className="text-center font-semibold text-blue-400 text-2xl">
          We Can Help When You Need It Most
        </p>
        <div className="mt-20">
          <h4 className="text-center text-xl">
            Our dentists can address all types of dental emergencies and have a
            24/7 call center in <br /> place.{" "}
            <span className="border-b hover:border-none text-blue-400 border-blue-400">
              Contact Fairfax Family Dental Care
            </span>{" "}
            if you experience an emergency such as:
          </h4>
          <div className="flex justify-center mt-10 text-xl">
            <ul className="mr-36 list-disc">
              <li>A knocked-out tooth</li>
              <li>A chipped tooth that is painful</li>
            </ul>
            <ul className="list-disc">
              <li>A persistent toothache</li>
              <li>
                A crown or{" "}
                <span className="border-b border-blue-400 text-blue-400 hover:border-none">
                  veneer
                </span>{" "}
                that comes loose
              </li>
            </ul>
          </div>
          <div className="flex justify-center mt-10">
            <button className="text-center text-xl bg-blue-400 hover:bg-blue-700 rounded-3xl px-5 py-3">
              Call: (703) 215-3878
            </button>
          </div>
        </div>
        <div className="bg-blue-900 max-w-[1400px] w-full mt-20">
          <h2 className="text-5xl text-center pt-10 pb-3 font-bold">Welcome to Fairfax Family Dental Care</h2>
          <p className="text-3xl text-center text-blue-400">Compassionate Dentists Serving the Entire Community</p>
          <div className="flex">
            <div className="max-w-[468px] mr-40 pl-36 pb-20 pt-10">
              <p className="mb-5">
                Established in 1986, Fairfax Family Dental Care offers
                comprehensive dentistry for all members of your household.
                Whether you need a routine checkup and cleaning or help with a
                dental health emergency, our dentists have you covered.
              </p>
              <p>Our Fairfax office is equipped with state-of-the-art technology so we can accurately diagnose conditions and develop custom treatment plans that emphasize conservative, cost-reducing procedures whenever possible. In addition, our facility was designed for full accessibility for patients with disabilities. Our dentists and dental staff prioritize effective communication and can speak English, Spanish, Czech, Farsi, Mandarin, Cantonese, Bulgarian, and Finnish.</p>
            </div>
            <div className="pl-20 pb-36 pt-10">
                <img className="w-[468px]" src={Img} alt="logo" />
                <p>We always do our best to make sure everyone feels welcome. <br /> Whenever you come to our Fairfax office, our team will make sure <br /> you feel like part of the family.</p>
            </div>
          </div>
        </div>
        <div>
            <h2 className="text-center text-bold text-5xl py-20">What Sets Fairfax Family Dental Care Apart</h2>
            <div className="grid grid-cols-2 mt-10 gap-10 mb-20">
                <div className="w-[568px] bg-blue-900">
                    <div className="p-[32px]">
                    <h3 className="mb-3 text-center">Patient Accessibility</h3>
                    <p>Fairfax Family Dental Care was designed to accommodate patients with disabilities. Thanks to this focus on accessibility, our office is able to welcome and meet the diverse health needs of all members of the community.</p>
                    </div>
                </div>
                <div className="w-[568px] bg-blue-900">
                    <div className="p-[32px]">
                    <h3 className="mb-3 text-center">Patient Accessibility</h3>
                    <p>Fairfax Family Dental Care was designed to accommodate patients with disabilities. Thanks to this focus on accessibility, our office is able to welcome and meet the diverse health needs of all members of the community.</p>
                    </div>
                </div>
                <div className="w-[568px] bg-blue-900">
                    <div className="p-[32px]">
                    <h3 className="mb-3 text-center">Patient Accessibility</h3>
                    <p>Fairfax Family Dental Care was designed to accommodate patients with disabilities. Thanks to this focus on accessibility, our office is able to welcome and meet the diverse health needs of all members of the community.</p>
                    </div>
                </div>
                <div className="w-[568px] bg-blue-900">
                    <div className="p-[32px]">
                    <h3 className="mb-3 text-center">Patient Accessibility</h3>
                    <p>Fairfax Family Dental Care was designed to accommodate patients with disabilities. Thanks to this focus on accessibility, our office is able to welcome and meet the diverse health needs of all members of the community.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
