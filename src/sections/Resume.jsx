import React from 'react'
import SectionTitle from '../components/SectionTitle';

const summary = [
  {
      title: 'BRANDON JOHNSON',
      description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
      items: [
          'Portland par 127, Orlando, FL',
          '(123) 456-7891',
          'alice.barkley@example.com'
      ]
  }
];

const education = [
  {
      title: 'MASTER OF FINE ARTS & GRAPHIC DESIGN',
      company: 'Rochester Institute of Technology, Rochester, NY',
      years: '2015 - 2016',
      description: [
          'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend'
      ]
  },
  {
      title: 'BACHELOR OF FINE ARTS & GRAPHIC DESIGN',
      company: 'Rochester Institute of Technology, Rochester, NY',
      years: '2010 - 2014',
      description: [
          'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila'
      ]
  }
];

const experience = [
  {
      title: 'SENIOR GRAPHIC DESIGN SPECIALIST',
      company: 'Experion, New York, NY',
      years: '2019 - Present',
      items: [
          'Lead in the design, development, and implementation of graphic, layout, and production communication materials.',
          'Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.',
          'Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design',
          'Oversee the efficient use of production project budgets ranging from $2,000 - $25,000'
      ]
  },
  {
      title: 'GRAPHIC DESIGN SPECIALIST',
      company: 'Stepping Stone Advertising, New York, NY',
      years: '2017 - 2018',
      items: [
          'Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).',
          'Managed up to 5 projects or tasks at a given time while under pressure',
          'Recommended and consulted with clients on the most appropriate graphic design',
          'Created 4+ design presentations and proposals a month for clients and account managers'
      ]
  }
];


const Resume = () => {

  return (
    <div className='container width-[100vw]  flex items-center justify-center' id='resume'>
       <div className="mb-8 p-5">
            <SectionTitle title='Resume' />
            <p className="mt-4 text-base text-gray-700">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-2xl font-bold mb-5 flex items-center font-ralewayBold" >
                        Summary
                    </h1>
                    <ul className="relative">
                        {summary.map((item, index) => (
                            <li key={index} className="mb-8 pl-8" >
                                <span className="absolute left-0 top-1.8 w-4 h-4 border-2 border-[#0563bb] rounded-full"></span>
                                <span className="absolute left-1.5 top-3.5 w-[1.9px] h-full bg-[#0563bb]"></span>
                                <h3 className="text-lg mb-2 text-gray-600 font-bold font-raleway">{item.title}</h3>
                                <p className="mb-2 font-robotoItalic text-black font-thin">{item.description}</p>
                                <ul className="list-disc ml-4">
                                    {item.items.map((point, i) => (
                                        <li key={i} className="mb-1">{point}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>

                    <h1 className="text-2xl font-bold mb-2 mt-8 flex items-center font-ralewayBold" >
                        Education
                    </h1>
                    <ul className="relative">
                        {education.map((item, index) => (
                            <li key={index} className="mb-8 pl-8 relative" >
                                <span className="absolute left-0 top-1.8 w-4 h-4 border-2 border-[#0563bb] rounded-full"></span>
                                <span className="absolute left-1.5 top-3.5 w-[1.9px] h-full bg-[#0563bb]"></span>
                                <h3 className="text-lg mb-2 font-raleway text-gray-600 font-bold">{item.title}</h3>
                                <p className="mb-2 font-raleway text-black font-bold">{item.years}</p>
                                <h4 className="text-base font-robotoItalic mb-5">{item.company}</h4>
                                <div>
                                    {item.description.map((point, i) => (
                                        <p key={i} className="mb-1 font-roboto">{point}</p>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h1 className="text-2xl font-bold mb-2 flex items-center font-ralewayBold" >
                        Professional Experience
                    </h1>
                    <ul className="relative ">
                        {experience.map((exp, index) => (
                            <li key={index} className="mb-8 pl-8 relative" >
                                <span className="absolute left-0 top-1.8 w-4 h-4 border-2 border-[#0563bb] rounded-full"></span>
                                <span className="absolute left-1.5 top-3.5 w-0.5 h-full bg-[#0563bb]"></span>
                                <h3 className="text-lg mb-2 font-raleway text-gray-600 font-bold">{exp.title}</h3>
                                <p className="mb-2 mt-2 font-raleway text-black font-bold">{exp.years}</p>
                                <h4 className="text-base font-robotoItalic mt-5 mb-5">{exp.company}</h4>
                                <ul className="list-disc ml-4">
                                    {exp.items.map((point, i) => (
                                        <li key={i} className="mb-1 font-roboto">{point}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume
