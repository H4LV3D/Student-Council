import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
// import styled from "styled-components";

function Home({ siteDetails }) {
  const myStyle = {
    height: "100vh",
    width: "100%",
    backgroundColor: siteDetails.color,
    backgroundImage: 'url("../assets/SENATE_BUILDING.jpeg")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    opacity: "0.75",
  };

  console.log(siteDetails?.bullet);

  return (
    <>
      <header className="fixed w-full top-0 z-50 text-gray-700">
        <Navbar />
      </header>
      <div className={`site `}>
        <div style={myStyle} className="flex items-center justify-center z-20">
          <div className="flex flex-col items-center justify-center">
            <section className="container w-full absolute z-40">
              <div className="px-6 sm:px-8 md:px-0 z-30">
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl text-start font-raleway font-black text-white lg:w-1/2">
                  {siteDetails.heroText}
                </h2>
                <hr className="bg-white h-2 my-2 md:my-4 w-1/2 md:w-1/5 rounded-md" />
              </div>
              <div className="flex items-end justify-center text-xl z-40 mt-20">
                <i class="fas fa-long-arrow-alt-down fa-xl fa-fw fa-bounce text-white"></i>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full">
        <div className="relative min-h-screen bg-white">
          <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <section className="container flex items-center lg:pt-0 px-6 pt-60 sm:pt-6">
              <div className="flex flex-col items-center justify-center py-20">
                <h2 className="xl:text-7xl md:text-6xl sm:text-4xl text-3xl font-sans md:font-black text-blueDeep mb-2">
                  WHAT DO WE DO?
                </h2>
                <hr className="bg-blueDeep h-2 my-2 md:my-4 w-1/2 md:w-1/5 rounded-md" />
                <p className="text-gray-700 font-normal font-raleway text-center text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 md:leading-10 xl:w-1/2 mt-4">
                  {siteDetails.sectionText}
                </p>

                {siteDetails?.bullet.map((bullet, index) => {
                  return (
                    <p className="text-gray-700 font-normal font-raleway text-center text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl leading-7 md:leading-10 xl:w-1/2 mt-4">
                      {bullet}{" "}
                    </p>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
