import React from "react";
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

function App() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden sm:block lg:flex  ">
        <Navbar/>
        <div className="fixed w-[200px] h-screen bg-fixed bg-cover bg-center   ">
          <div className="lg:hidden absolute ">
            <BurgerIcon />
          </div>

          {/* <div className="hidden lg:block absolute lg:relative left-2 top-[25vh] w-full h-screen z-50">
            <Sidebar />
          </div> */}
        </div>

        <div className="flex flex-col items-center w-full lg:ml-[150px] z-10 mt-20">
          <section className="w-full">
            <Home />
          </section>
          <section className="w-full">
            <About />
          </section>
          <section className="w-full">
            <Resume />
          </section>
          <section className="w-full">
            <Portfolio />
          </section>
          <section className="w-full">
            <Services />
          </section>
          <section className="w-full">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
