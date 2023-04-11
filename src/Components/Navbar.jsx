import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../assets/CU-Logo.png";
import { pageData } from "../Data/SiteData";

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  const navElements = pageData.map((element) => {
    return {
      link: element.link,
      text: element.title,
    };
  });

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  return (
    <>
      <div
        className="flex flex-row flex-wrap px-4 sm:px-8 md:px-12 py-6 md:items-center justify-between text-gray-700 bg-gray-100"
        id="navbar"
      >
        <div className="flex justify-between items-center w-full">
          <Link to="/">
            <div className="">
              <img src={logo} className="w-[140px]" alt="Logo" />
            </div>
          </Link>
          <nav className="hidden lg:flex flex-wrap items-center justify-center ml-4 font-raleway">
            {navElements.map((element, index) => (
              <Link to={element.link} key={index}>
                <p
                  className={`mr-5 text-md font-semibold hover:text-blueDeep hover:border-b-2 hover:border-blueDeep hover:text-lg transition ease-in-out duration-200 ${
                    active === element.link
                      ? "text-blueDeep text-lg border-b-4 border-blueDeep"
                      : "text-gray-700 dark:text-white"
                  }`}
                  onClick={() => setActive(element.link)}
                >
                  {element.text}
                </p>
              </Link>
            ))}
          </nav>
          <div className="flex md:text-xl lg:hidden items-center justify-center">
            <button className="mx-3" onClick={() => setIsOpen(!isOpen)}>
              <i
                className={`fas ${
                  isOpen ? "fa-xmark" : "fa-stream"
                } fa-lg fa-fw sm:p-3 py-3 text-blueDeep cursor-pointer`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      <div
        id="menu"
        className={` ${
          isOpen
            ? "w-screen h-screen opacity-95 flex"
            : "w-0 h-0 opacity-0 hidden"
        } z-50 justify-center text-gray-800 dark:text-blueDeep bg-gray-200 dark:bg-gray-800 opacity-0 font-raleway font-medium text-lg overflow-y-scroll`}
      >
        <div className="flex flex-col text-center items-center text-xl text-gray-800 dark:text-gray-300 pt-6 w-full">
          {navElements.map((element, index) => (
            <Link to={element.link} key={index}>
              <p
                className={`!text-md font-semibold my-6 hover:text-blueDeep cursor-pointer ${
                  active === element.link
                    ? "text-blueDeep text-xl"
                    : "text-gray-700 dark:text-white"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {element.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
