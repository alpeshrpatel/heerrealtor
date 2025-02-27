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
import MortgageCalculator from "./sections/MorgageCalculator";



function App() {
  const [isSidebarOn, setIsSidebarOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const handleBurgerClick = () => {
    setIsSidebarOn((prev) => !prev);
  };

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden sm:block lg:flex z-20">
        <Navbar isSidebarOn={isSidebarOn} setIsSidebarOn={setIsSidebarOn} handleBurgerClick={handleBurgerClick} setIsModalOpen = {setIsModalOpen}/>
        <div className="fixed w-[200px] h-screen bg-fixed bg-cover bg-center z-20">   
          {/* <div className="lg:hidden sm:block absolute " onClick={handleBurgerClick}>
            <BurgerIcon />
          </div> */}
          {isSidebarOn && (
            <div className=" lg:block absolute lg:relative left-2 top-[25vh] w-full h-screen z-20" >
              <Sidebar setIsSidebarOn={setIsSidebarOn} setIsModalOpen={setIsModalOpen}/>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center w-full mt-20 bg-gray-100">
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
          <section className="w-[100vw] flex justify-center z-0">
            <MissionVision />
          </section>
          <section className="w-[100vw] flex justify-center z-0">
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
            <div className="bg-white w-full max-w-3xl mx-auto p-6 rounded-lg shadow-lg relative mt-24 ">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ✖
              </button>
              {/* <h2 className="text-xl font-semibold mb-4">Mortgage Calculator</h2> */}
              <div className="w-full mt-[30vh] md:mt-2 lg:mt-2 " style={{zIndex:'100'}}>
              
              <MortgageCalculator isModalOpen={isModalOpen} closeModal={closeModal}/>
              
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
