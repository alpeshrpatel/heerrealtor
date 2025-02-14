import React from "react";
import SectionTitle from "../components/SectionTitle";

const MissionVision = () => {
  return (
    <div id="mission" className="bg-gray-100 py-12 px-6 z-0">
      <div className="max-w-6xl mx-auto">
      <SectionTitle title="Our Mission & Vision" />
        {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Mission & Vision
        </h2> */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mt-8 z-0">
          {/* Mission Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-transform duration-300 z-0">
            <h3 className="text-2xl font-semibold text-sky-600 mb-4">
              Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To redefine real estate services by delivering unparalleled
              expertise, personalized solutions, and unwavering support. We aim
              to empower every client with the knowledge and confidence to
              achieve their property goals while cultivating trust, integrity,
              and lifelong partnerships.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-transform duration-300 z-0">
            <h3 className="text-2xl font-semibold text-sky-600 mb-4">
              Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be a trailblazer in the real estate industry, celebrated for
              our innovative strategies, community impact, and client-centric
              approach. Our vision is a future where every buyer, seller, and
              investor—across residential, commercial, and specialty
              properties—receives exceptional care, professionalism, and
              tailored guidance at every step of their real estate journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
