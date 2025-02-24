import React from "react";
import Logo from '../img/google-logo.svg'

const Section3 = () => {
  return (
    <section className="bg-Section3bg bg-cover bg-no-repeat">
      <div className="w-full max-w-7xl mx-auto py-5">
        <h2 className="text-7xl text-center pt-16">"Great experience!"</h2>
        <p className="text-3xl text-center">Serving All of Fairfax County</p>
        <div className="flex justify-between my-20">
            <div className="w-[584px] bg-white">
                <div className="p-10"> 
                    <div className="flex">
                        <div className="bg-gray-300 rounded-full w-[70px] h-[70px]">
                            <h2 className="text-center text-3xl text-black pt-4">VH</h2>
                        </div>
                        <div className="text-black ml-5">
                            <p className="text-bold text-xl">victoria hornaday</p>
                            <p>2022</p>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        <div className="ml-48">
                            <img src={Logo} alt="Logo" />
                        </div>
                    </div>
                    <p className="text-black pt-5 pb-10 text-xl">I have been a client over 30 years. They have always done a great job and They offer emergency appointments on weekends which I consider a valuable service I have not found anywhere else.</p>
                    <p className="text-black border-b text-2xl w-[170px] border-black">View on Google</p>
                </div>
            </div>
            <div className="w-[584px] bg-white">
                <div className="p-10"> 
                    <div className="flex">
                        <div className="bg-gray-300 rounded-full w-[70px] h-[70px]">
                            <h2 className="text-center text-3xl text-black pt-4">VH</h2>
                        </div>
                        <div className="text-black ml-5">
                            <p className="text-bold text-xl">victoria hornaday</p>
                            <p>2022</p>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        <div className="ml-48">
                            <img src={Logo} alt="Logo" />
                        </div>
                    </div>
                    <p className="text-black pt-5 pb-10 text-xl">I have been a client over 30 years. They have always done a great job and They offer emergency appointments on weekends which I consider a valuable service I have not found anywhere else.</p>
                    <p className="text-black border-b text-2xl w-[170px] border-black">View on Google</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
