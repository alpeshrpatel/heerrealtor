import React from 'react'

const skills = [
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 90 },
    { name: 'JAVASCRIPT', percentage: 75 },
    { name: 'PHP', percentage: 80 },
    { name: 'WORDPRESS/CMS', percentage: 90 },
    { name: 'PHOTOSHOP', percentage: 55 }
  ];
const ProgressBar = () => {
  return (
    <div>
      <div className="mt-8 grid lg:grid-cols-2 gap-6 w-[75vw] mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="mb-1">
            <div className="flex justify-between mb-1" >
              <span className="text-sm font-normal capitalize">{skill.name}</span>
              <span className="">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-300 h-2.5" >
              <div
                className="bg-[#03233F] h-full"
                style={{ width: `${skill.percentage}%`, transition: 'width 1s ease' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
