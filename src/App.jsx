import React, { useState } from "react";
import "./App.css";
import Home from "./sections/Home";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Sidebar from "./sections/Sidebar";
import BurgerIcon from "./components/BurgerIcon";
import Navbar from "./sections/Navbar";
import MissionVision from "./sections/MissionVision";

function App() {
  const [isSidebarOn, setIsSidebarOn] = useState(false);

  const handleBurgerClick = () => {
    setIsSidebarOn((prev) => !prev);
  };
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden sm:block lg:flex">
        <Navbar isSidebarOn={isSidebarOn} setIsSidebarOn={setIsSidebarOn} handleBurgerClick={handleBurgerClick}/>
        <div className="fixed w-[200px] h-screen bg-fixed bg-cover bg-center">
          {/* <div className="lg:hidden sm:block absolute " onClick={handleBurgerClick}>
            <BurgerIcon />
          </div> */}
          {isSidebarOn && (
            <div className=" lg:block absolute lg:relative left-2 top-[25vh] w-full h-screen " style={{ zIndex: 2147483647 }}>
              <Sidebar setIsSidebarOn={setIsSidebarOn}/>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center w-full  z-10 mt-20 bg-gray-100">
          <section className="w-[100vw] flex justify-center">
            <Home />
          </section>
          <section className="w-[100vw] flex justify-center">
            <About />
          </section>
          {/* <section className="w-[100vw] flex justify-center">
            <Resume />
          </section> */}
          <section className="w-[100vw] flex justify-center">
            <Portfolio />
          </section>
          <section className="w-[100vw] flex justify-center">
            <MissionVision />
          </section>
          <section className="w-[100vw] flex justify-center ">
            <Services />
          </section>
          <section className="w-[100vw] flex justify-center">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
