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
import MortgageCalculatorWidget from "./sections/MortgageCalculatorWidget";



function App() {
  const [isSidebarOn, setIsSidebarOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleBurgerClick = () => {
    setIsSidebarOn((prev) => !prev);
  };

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden sm:block lg:flex">
        <Navbar isSidebarOn={isSidebarOn} setIsSidebarOn={setIsSidebarOn} handleBurgerClick={handleBurgerClick} setIsModalOpen = {setIsModalOpen}/>
        <div className="fixed w-[200px] h-screen bg-fixed bg-cover bg-center">
          {/* <div className="lg:hidden sm:block absolute " onClick={handleBurgerClick}>
            <BurgerIcon />
          </div> */}
          {isSidebarOn && (
            <div className=" lg:block absolute lg:relative left-2 top-[25vh] w-full h-screen " style={{ zIndex: 2147483647 }}>
              <Sidebar setIsSidebarOn={setIsSidebarOn} setIsModalOpen={setIsModalOpen}/>
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
          <button
          className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
          onClick={openModal}
        >
          Open Mortgage Calculator
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-md mx-auto p-6 rounded-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ✖
              </button>
              <h2 className="text-xl font-semibold mb-4">Mortgage Calculator</h2>
              <div className="flex justify-center">
              <MortgageCalculatorWidget isModalOpen={isModalOpen}/>
              </div>
              
            </div>
          </div>
        )}
          
          {/* <section className="w-[100vw] flex justify-center">
            <MortgageCalculatorWidget />
          </section> */}
        </div>
        
      </div>
    </>
  );
}

export default App;
