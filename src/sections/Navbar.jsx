import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-[#0563bb] text-white fixed w-full z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-2 px-6">
          <div>
            <img
              src="./logo.webp"
              alt="logo"
              height="100"
              width="100"
              className="rounded-full"
            />
            <div className="text-lg font-bold">Realtor Hiral</div>
          </div>

          {/* <div className="md:hidden flex items-center" onClick={toggleMenu}>
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
          </div> */}
          <ul
            className={`flex space-x-6 md:flex ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <li>
              <a
                href="#home"
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
