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
      <div className="basis-1/3 hidden lg:flex justify-center absolute left-10 z-10 ">
            <img
              src="/hiralphoto.png"
              alt=""
              className="h-auto w-[80vw] md:h-auto md:w-[50vw] lg:h-auto lg:w-[20vw] justify-center ml-20 rounded-md"
            />
        </div>
        <div className="opacity-25  h-screen">
          <img src="/home.jpg" alt="image" className="w-[100vw] h-full " />
        </div>
        <div className="absolute flex flex-col z-10 left-[20vw] lg:left-[40vw]  ">
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
            {/* <a href="#" className="p-4">
              <RiTwitterXFill size={22} className="hover:text-blue-500" />
            </a> */}
            {/* fill="#676869" */}
            <a href="https://www.facebook.com/heerrealty?mibextid=wwXIfr&rdid=YQ7UqA2WQire9TXx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18dfW5oDFt%2F%3Fmibextid%3DwwXIfr#" target="/_blank" className="p-4">
              <MdFacebook size={22} className="hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/heer_realtor?igsh=OGJkbnp2NThnbTZu&utm_source=qr" target="/_blank" className="p-4">
              <IoLogoInstagram size={22} className="hover:text-blue-500" />
            </a>
            <a href="https://www.linkedin.com/in/heer-realtor/" target="/_blank" className="p-4">
              <RiLinkedinBoxFill size={22} className="hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
