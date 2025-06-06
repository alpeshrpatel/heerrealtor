import React, { useState } from "react";
import CalculatorsDropdown from "../components/calculators/CalculatorsDropdown";

const Navbar = ({ isSidebarOn, setIsSidebarOn,handleBurgerClick,setIsModalOpen}) => {
  

  return (
    <>
      <nav className="bg-[#03233F] text-white fixed w-full z-20 shadow-lg h-32">
        <div className="container mx-auto flex justify-between items-center py-2 px-6">
          <div>
            <img
              src="./logo4.png"
              alt="logo"
              height="200"
              width="200"
              className="rounded-full h-28 w-52"
            />
            {/* <div className="text-lg font-bold">Heer Realtor </div> */}
          </div>

          <div className="md:hidden flex items-center" onClick={handleBurgerClick}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <ul
            className={`flex space-x-6 md:flex ${
              isSidebarOn ? "hidden" : "hidden"
            } md:block`}
          >
            <li>
              <a
                href="#home"
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl"
              >
                About Hiral
              </a>
            </li>
            
            <li>
              <a
                href="#mission"
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl"
              >
                Services
              </a>
            </li>
            {/* <li>
              <a
                href="#services"
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                Services
              </a>
            </li> */}
            <li>
              <a
                href="#testimonials"
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl"
              >
                Testimonials
              </a>
            </li>
            {/* <li>
              <button
                
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl"
                onClick={() => setIsModalOpen(true)}
              >
                Mortgage Calculator
              </button>
            </li> */}
            <li>
              <ul>
                <CalculatorsDropdown />
              </ul>
              {/* <button
                
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl"
                onClick={() => setIsModalOpen(true)}
              >
                Mortgage Calculator
              </button> */}
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#5998C9] transition-colors duration-300 text-xl bg-[#d4d5e0] px-3 pt-3 pb-4 rounded-xl text-[#03233F] font-semibold "
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
