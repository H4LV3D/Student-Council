import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import DSA from "../assets/DSA_ANNOUNCEMENT.jpeg";
import QS from "../assets/UNIVERSITY_RANKING.jpeg";

function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <header className="fixed w-full top-0 z-50 text-gray-700">
          <Navbar />
        </header>
        <div className="flex items-center justify-center flex-col home">
          <div className="absolute top-[12%] px-6 sm:px-8 md:px-12  xl:px-16 w-full z-30 ">
            <div className="bg-gray-300 w-full lg:w-2/3 xl:w-1/2 mx-auto rounded-lg shadow-xl p-3 flex">
              <div className="w-[10%] my-auto text-center">
                <i class="fas fa-envelope fa-2x fa-fw text-blueDeep"></i>
              </div>
              <div className="w-[60%]">
                <h2 className="text-xl text-blueDeep font-semibold font-raleway">
                  Irespond Scheme
                </h2>
                <p className="text-sm font-raleway">
                  Please follow the link to donate
                </p>
                <a
                  link="/irespond"
                  className="py-2 text-base font-semibold font-raleway text-blueDeep underline md:hidden"
                >
                  Donate Now!
                </a>
              </div>
              <div className="w-[30%] text-end">
                <a href="/irespond">
                  <button className="border border-blueDeep font-raleway font-medium text-xl text-white w-[70%] py-2.5 rounded-md my-auto bg-blueDeep">
                    Donate <span className="lg:hidden">Now</span>!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <section className="md:container w-full min-h-screen flex flex-col items-center justify-center">
            <div className="px-6 sm:px-8 py-20 flex flex-col justify-center pt-48 sm:pt-24 lg:mt-48 z-30">
              <h2 className="text-4xl sm:text-7xl md:text-7xl lg:text-8xl text-start font-raleway font-bold md:font-black text-white">
                <p className="mt-2 md:mt-4">
                  Welcome To <br className="hidden md:block" /> Student Affairs.
                </p>
                <p></p>
              </h2>
              <hr className="bg-white h-2 my-4 md:my-8 w-1/2 md:w-1/5 rounded-md" />
              <p className="text-white font-medium font-raleway text-2xl md:text-lg text-start w-full md:w-3/4 xl:w-1/2 my-5 mb-10">
                The Department of Student Affairs is committed to ensuring that
                each student receives adequate support in all aspects of their
                academic and extra-curricular pursuits during their stay at CU.
              </p>
            </div>

            <div className="flex items-center justify-center text-xl z-40">
              <i class="fas fa-long-arrow-alt-down fa-xl fa-fw fa-bounce text-white"></i>
            </div>
          </section>
        </div>
      </div>
      <div className="min-h-screen w-full">
        <div className="relative min-h-screen bg-blueDeep flex flex-col items-center justify-center">
          <section className="flex items-center justify-center lg:pt-0">
            <div className="container flex flex-col items-center justify-center">
              <div className="w-full flex flex-col lg:items-end items-center justify-start mb-8">
                <h2 className="text-4xl md:text-6xl text-start font-raleway font-bold md:font-black text-white mb-4">
                  About Us
                </h2>
                <p className="text-white font-light font-raleway text-center lg:text-end text-lg px-6 md:px-0 md:text-2xl lg:w-1/2 lg:leading-9">
                  We are charged with the responsibility of enforcing rules and
                  regulations on campus in order to fulfil our vision of raising
                  new generation leader. Their assignment includes enforcing
                  campus rules and regulations. To fulfil its mandate, the Unit
                  is divided into three subunits: Admin. & Special Duties,
                  Residency, and Monitoring, Surveillance & Security.
                </p>
              </div>

              <div className="w-full flex flex-col items-center lg:items-start justify-start mr-0">
                <h2 className="text-4xl md:text-6xl font-raleway font-bold md:font-black text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-white font-light font-raleway text-center px-6 md:px-12 lg:px-0 lg:text-start text-lg md:text-2xl lg:w-1/2 lg:leading-9 mr-0">
                  Our core mission is to provide a healthy learning environment
                  for all students by building special relationships with them.
                  We do this by examining their on- and off-campus activities.
                  We champion a holistic interest in our students’ welfare as we
                  mold them into respectable, disciplined, studious, and
                  well-mannered eagles ready to take on the world. We do this by
                  providing student support services.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="min-h-screen w-full">
        <div className="relative min-h-screen bg-white">
          <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <section className="container flex items-center justify-center lg:pt-0">
              <div className="text-center flex flex-col items-center justify-center">
                <h2 className="xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold font-raleway text-blueDeep mb-2">
                  WHO ARE WE?
                </h2>
                <p className="text-gray-700 text-center text-2xl md:px-12 lg:w-1/2 mb-4 font-raleway font-normal">
                  The Students’s Affairs department is responsible for the
                  welfare and general wellbeing of the students of Covenant
                  University.
                </p>
                <img
                  src={DSA}
                  alt="DSA making announcement"
                  className=" h-[300px] w-[400px] md:h-[450px]  md:w-[650px] rounded-xl shadow-2xl mb-8 "
                />
                <button className="text-xl text-blueDeep font-raleway font-bold px-24 py-4 rounded-lg border border-blueDeep">
                  VIEW MORE
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full">
        <div className="relative min-h-screen bg-blueDeep">
          <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <section className="container flex items-center justify-center lg:pt-0">
              <div className="text-center flex flex-col items-center justify-center">
                <h2 className="xl:text-5xl md:text-5xl sm:text-4xl text-3xl font-raleway font-black text-white mb-2">
                  WHO DO WE DO?
                </h2>
                <p className="text-white text-center font-raleway font-normal text-2xl lg:w-1/2 md:px-12 mb-4">
                  We support and promote the present and future well-being of
                  students, making them become the Total Graduate in consonance
                  with the Covenant University objectives.
                </p>
                <img
                  src={QS}
                  alt="University Ranking"
                  className=" h-[300px] w-[400px] md:h-[450px]  md:w-[650px] rounded-xl shadow-2xl mb-6"
                />
                <label
                  htmlFor=""
                  className="font-normal font-raleway mb-12 text-lg text-white"
                >
                  QS World University Rankings
                </label>
                <button className="text-xl text-white font-bold font-raleway px-24 py-4 rounded-lg border border-white bg-blueDeep">
                  VIEW MORE
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
