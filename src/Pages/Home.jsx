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
          <section className="container w-full min-h-screen flex flex-col">
            <div className="px-6 sm:px-8 py-20 flex flex-col justify-center pt-48 sm:pt-24 lg:mt-48 z-50">
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl text-start font-sans font-bold md:font-black text-white md:leading-10">
                <p>Welcome to</p>
                <p className="mt-3 md:mt-6">Student Affairs.</p>
              </h2>
              <hr className="bg-white h-2 my-4 md:my-8 w-1/2 md:w-1/5 rounded-md" />
              <p className="text-white font-raleway font-medium font-Montserrat text-2xl md:text-lg text-start w-full md:w-3/4 xl:w-1/2 my-5 mb-10">
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
        <div className="relative min-h-screen bg-blueDeep">
          <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <section className="flex items-center lg:pt-0">
              <div className="container">
                <div className="w-full flex flex-col md:items-end items-center justify-start mb-8">
                  <h2 className="text-4xl md:text-6xl text-start font-montserrat font-bold md:font-black text-white mb-4">
                    About Us
                  </h2>
                  <p className="text-white font-light text-center md:text-end text-lg px-6 md:px-0 md:text-2xl md:w-1/2 xl:w-1/2 mr-0">
                    We are charged with the responsibility of enforcing rules
                    and regulations on campus in order to fulfil our vision of
                    raising new generation leader. Their assignment includes
                    enforcing campus rules and regulations. To fulfil its
                    mandate, the Unit is divided into three subunits: Admin. &
                    Special Duties, Residency, and Monitoring, Surveillance &
                    Security.
                  </p>
                </div>

                <div className="w-full flex flex-col items-center md:items-start justify-start mr-0">
                  <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4">
                    Our Mission
                  </h2>
                  <p className="text-white font-light text-center px-6 md:px-0 md:text-start text-lg md:text-2xl md:w-1/2 xl:w-1/2 leading-10 mr-0">
                    Our core mission is to provide a healthy learning
                    environment for all students by building special
                    relationships with them. We do this by examining their on-
                    and off-campus activities. We champion a holistic interest
                    in our students’ welfare as we mold them into respectable,
                    disciplined, studious, and well-mannered eagles ready to
                    take on the world. We do this by providing student support
                    services.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full">
        <div className="relative min-h-screen bg-white">
          <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <section className="container flex items-center justify-center lg:pt-0">
              <div className="text-center flex flex-col items-center justify-center">
                <h2 className="xl:text-5xl md:text-5xl sm:text-4xl text-3xl font-sans font-black text-blueDeep mb-2">
                  WHO ARE WE?
                </h2>
                <p className="text-gray-700 font-light text-center text-2xl md:w-1/2 mb-2">
                  The Students’s Affairs department is responsible for the
                  welfare and general wellbeing of the students of Covenant
                  University.
                </p>
                <img
                  src={DSA}
                  alt="DSA making announcement"
                  className=" h-[300px] w-[400px] md:h-[450px]  md:w-[650px] rounded-xl shadow-2xl mb-8 "
                />
                <button className="text-xl text-blueDeep font-bold px-24 py-4 rounded-lg border border-blueDeep">
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
                <h2 className="xl:text-5xl md:text-5xl sm:text-4xl text-3xl font-sans font-black text-white mb-2">
                  WHO DO WE DO?
                </h2>
                <p className="text-white font-light text-center text-2xl md:w-1/2 mb-4">
                  We support and promote the present and future well-being of
                  students, making them become the Total Graduate in consonance
                  with the Covenant University objectives.
                </p>
                <img
                  src={QS}
                  alt="University Ranking"
                  className=" h-[300px] w-[400px] md:h-[450px]  md:w-[650px] rounded-xl shadow-2xl mb-8 "
                />
                <label
                  htmlFor=""
                  className="font-black mb-3 text-lg text-white"
                >
                  QS World University Rankings
                </label>
                <button className="text-xl text-white font-bold px-24 py-4 rounded-lg border border-white bg-blueDeep">
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
