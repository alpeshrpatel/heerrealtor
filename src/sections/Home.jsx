import React from "react";
import { TypeAnimation } from "react-type-animation";
import { RiTwitterXFill } from "react-icons/ri";
import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinBoxFill } from "react-icons/ri";

const Home = () => {
  return (
    <div id="home">
      <div className="container h-screen w-full relative flex items-center justify-center ">
        <div className="opacity-25 p-4 h-screen">
          <img
            src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/hero-bg.jpg"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute flex flex-col z-10 left-[20vw]  ">
          <h2 className="text-6xl font-bold text-[#45505b] ">
            Brandon Johnson
          </h2>

          <div className=" text-3xl text-[#363637] pt-4 pb-4 ">
            <span>I'm</span>
            <TypeAnimation
              sequence={[
                " Designer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                " Developer",
                1000,
                " Freelancer",
                1000,
                " Photographer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
              className="border-b-[2px] border-sky-600"
            />
          </div>

          <div className="flex flex-start">
            <a href="#" className="p-4">
              <RiTwitterXFill
                size={22}
                className="hover:text-blue-500"
              />
            </a>
            {/* fill="#676869" */}
            <a href="#" className="p-4">
              <MdFacebook size={22}  className="hover:text-blue-500" />
            </a>
            <a href="#" className="p-4">
              <IoLogoInstagram size={22} className="hover:text-blue-500" />
            </a>
            <a href="#" className="p-4">
              <RiLinkedinBoxFill size={22} className="hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
