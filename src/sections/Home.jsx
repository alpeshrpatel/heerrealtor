import React from "react";
import { TypeAnimation } from "react-type-animation";
import { RiTwitterXFill } from "react-icons/ri";
import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinBoxFill } from "react-icons/ri";

const Home = () => {
  return (
    <div id="home" style={{ margin: 0, padding: 0 }}>
      <div className=" h-screen w-full relative flex items-center justify-center ">
        <div className="opacity-25  h-screen">
          <img src="/home.jpg" alt="image" className="w-[100vw] h-full " />
        </div>
        <div className="absolute flex flex-col z-10 left-[20vw]  ">
          <h2 className="text-3xl lg:text-6xl font-bold text-[#45505b] ">
            Welcome to HeerRealtor.com
          </h2>

          <div className=" text-xl lg:text-3xl text-[#363637] pt-4 pb-4 ">
            <span>I'm</span>
            <TypeAnimation
              sequence={[
                " HEER Patel, Your Real Estate Expert", // Type this text
                2000, // Wait for 2 seconds
                "", // Erase the text
                1000, // Wait for 1 second before retyping
              ]}
              wrapper="span"
              speed={20} 
              deletionSpeed={90}
              repeat={Infinity} 
              className="border-b-[2px] border-sky-600"
            />
          </div>

          <div className="flex flex-start">
            <a href="#" className="p-4">
              <RiTwitterXFill size={22} className="hover:text-blue-500" />
            </a>
            {/* fill="#676869" */}
            <a href="#" className="p-4">
              <MdFacebook size={22} className="hover:text-blue-500" />
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
