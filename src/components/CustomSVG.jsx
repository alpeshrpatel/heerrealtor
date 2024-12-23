// src/components/CustomSVG.js
import React, { Children } from 'react';

const CustomSVG = ({ svg, children}) => {
    console.log(Children)
    return(
        <div className="relative w-full h-full flex items-center justify-center">
          <img src={svg} alt="Service Icon" className="hover:text-teal-500 w-full h-full" />
          {children}
        </div>
          )
}

   


export default CustomSVG;
