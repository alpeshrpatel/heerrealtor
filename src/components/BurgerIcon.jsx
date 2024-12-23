import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "../sections/Sidebar";

const BurgerIcon = () => {
  const [isOpen, setOpen] = useState('false');
  return (
    <>
      <div className="fixed right-[2vh] top-[2vh] rounded-full bg-blue-700 p-3">
        {isOpen ? (
          <RxCross2
            size={20}
            className="text-white cursor-pointer"
            onClick={() => setOpen(!isOpen)}
            
          />
        ) : (
          <RxHamburgerMenu
            size={20}
            className="text-white cursor-pointer"
            onClick={() => setOpen(!isOpen)}
          />
        )}
      </div>

      {isOpen ? (
        <div className="fixed left-2  h-screen flex justify-center top-[25vh] z-20 ">
          <Sidebar />
        </div>
      ) : (
        null
      )}
    </>
  );
};

export default BurgerIcon;
