import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div>
       <h2 className="flex justify-center text-3xl font-bold  ">{title}</h2>
      <div className=" mx-auto border-b-[1px] border-gray-400 pt-3 w-[150px]">
        <div className="mx-auto border-b-[3px] border-[#03233F] w-[55px]"></div>
      </div>
    </div>
  )
}

export default SectionTitle
