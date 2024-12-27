import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SectionTitle from "../components/SectionTitle";
import Service1 from "../assets/Services_icons/Service1.svg";
import Service2 from "../assets/Services_icons/Service2.svg";
import Service3 from "../assets/Services_icons/Service3.svg";
import Service4 from "../assets/Services_icons/Service4.svg";
import Service5 from "../assets/Services_icons/Service5.svg";
import Service6 from "../assets/Services_icons/Service6.svg";
import "../../src/App.css";
import CustomSVG from "../components/CustomSVG";
import {
  BsActivity,
  BsBoundingBoxCircles,
  BsCalendar4Week,
  BsEasel,
} from "react-icons/bs";
import { BsChatSquareText } from "react-icons/bs";
import { PiBroadcastFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const testimonials = [
  {
    message:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    name: "Saul Goodman",
    photo:
      "https://bootstrapmade.com/demo/templates/MyResume/assets/img/testimonials/testimonials-1.jpg",
    position: "CEO & Founder",
  },
  {
    message:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    name: "Sara Wilson",
    photo:
      "https://bootstrapmade.com/demo/templates/MyResume/assets/img/testimonials/testimonials-2.jpg",
    position: "Designer",
  },
  {
    message:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    name: "Jena Karlis",
    photo:
      "https://bootstrapmade.com/demo/templates/MyResume/assets/img/testimonials/testimonials-3.jpg",
    position: "Store Owner",
  },
  {
    message:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    name: "John Larson",
    photo:
      "https://bootstrapmade.com/demo/templates/MyResume/assets/img/testimonials/testimonials-4.jpg",
    position: "Entrepreneur",
  },
];

const services = [
  {
    svg: '/residential.png',
    iconclass: () => <BsActivity size={50} className="text-blue-500 absolute hover:text-white" />,
    title: "Residential",
    description:
      "Spacious, modern homes in serene American suburban neighborhoods await you.",
  },
  {
    svg: '/commercial.png',
    iconclass: () => <PiBroadcastFill size={50} className="text-orange-500 absolute hover:text-white" />,
    title: "Commercial",
    description:
      "Skyscrapers and storefronts shape the dynamic American urban landscape.",
  },
  {
    svg: '/industry.png',
    iconclass: () => <BsEasel size={50} className="text-green-500 absolute hover:text-white" />,
    title: "Industry row land",
    description:
      "Expansive industrial sites drive innovation and economic growth across America.",
  },
  {
    svg: '/special.png',
    iconclass: () => (
      <BsBoundingBoxCircles size={50} className="text-red-500 absolute hover:text-white" />
    ),
    title: "Special use",
    description:
      "Unique properties cater to specific needs, enhancing American lifestyle diversity.",
  },
  
];

const Services = () => {
  const handleServiceClick = () => {
    scrollToTop();
    navigate("/service_details");
  };

  return (
    <div className="container width-full mt-12 px-16 " id='testimonials'>
      <h3 className="mx-auto w-full mt-4 text-center text-blue-400 text-3xl font-semibold">
      What are you looking for?
      </h3>
      <p className="text-center mt-2 mb-4">We provide full service at every step</p>
      <SectionTitle title="Services" />
      
      <div className="mb-8 p-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-8">
        {services.map((service, index) => (
      <div
        key={index}
        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-100 hover:shadow-2xl"
        onClick={handleServiceClick}
      >
        <div className="flex items-center justify-center h-24 w-24 mb-4">
          <CustomSVG svg={service.svg} ></CustomSVG>
        </div>
        <h3 className="text-xl font-bold mb-2 font-raleway text-center">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm text-center">{service.description}</p>
      </div>
    ))}
        </div>
        <div  className="container width-full mt-12  sm:px-4  lg:px-16 ">
          <SectionTitle title="Testimonials" />
          <p className="mx-auto w-full mt-4 text-center">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
          <div className="">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={true}
              showArrows={false}
              className="testimonials-carousel "
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-item flex flex-col lg:flex-row items-center justify-center w-full pb-20  "
                >
                  <div className="testimonial-content bg-white px-6 py-4 rounded-lg  max-w-md mx-auto relative">
                    <div className=" absolute left-0 top-0 bottom-0 w-[2px] bg-[#03233F]"></div>
                    <p className="text-gray-700 text-start font-roboto text-[16px] ">
                      <RiDoubleQuotesL className="text-sky-400 " />
                      {testimonial.message}{" "}
                      <RiDoubleQuotesR className="text-sky-400" />
                    </p>
                    <p className="text-xl font-semibold mt-2 font-raleway text-black text-start">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400 text-start">
                      {testimonial.position}
                    </p>
                    <div className="stars flex justify-start mt-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-photo mt-4">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-36 h-36 sm:w-60 sm:h-60 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
