import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";

function Home({ siteDetails }) {
  return (
    <>
      <div className={`w-full home`}>
        <header className="fixed w-full top-0 z-50 text-gray-700">
          <Navbar />
        </header>
        <div className="flex items-center justify-center flex-col relative">
          <section className="container w-full flex flex-col">
            <div className="px-6 sm:px-8 py-20 flex flex-col justify-center pt-48 sm:pt-24 lg:mt-48 z-30">
              <h2 className="text-6xl sm:text-7xl md:text-7xl lg:text-7xl text-start font-sans font-black text-white w-1/2 lg:mt-16">
                {siteDetails.heroText}
              </h2>
              <hr className="bg-white h-2 my-2 md:my-4 w-1/2 md:w-1/5 rounded-md" />
            </div>
            <div className="flex items-end justify-center text-xl z-40 lg:mt-36">
              <i class="fas fa-long-arrow-alt-down fa-xl fa-fw fa-bounce text-white"></i>
            </div>
          </section>
        </div>
      </div>
      <div className="min-h-screen w-full">
        <div className="relative min-h-screen bg-white">
          <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <section className="container flex items-center lg:pt-0">
              <div className="flex flex-col items-center justify-center">
                <h2 className="xl:text-7xl md:text-6xl sm:text-4xl text-3xl font-sans font-black text-blueDeep mb-2">
                  WHAT DO WE DO?
                </h2>
                <hr className="bg-blueDeep h-2 my-2 md:my-4 w-1/2 md:w-1/5 rounded-md" />
                <p className="text-gray-700 font-light text-center text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 md:leading-10 xl:w-1/2 mt-4 px-6 sm:px-0">
                  {siteDetails.sectionText}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
