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
      "As a first-time homebuyer, I had an exceptional experience working with Heer Patel on the purchase of my primary home. From the beginning, they demonstrated extensive knowledge of the local market, providing valuable insights into neighborhoods, property features, and potential future value.Heer was consistently professional, responsive, and patient, addressing all my questions and concerns with great care. Their expertise in negotiations ensured that I secured the best possible deal on my dream home.",
    name: "Kalpesh Patel",
    photo:
      "/testimonial1.png",
    position: "",
  },
  {
    message:
      "I had the pleasure of working with Hiral Patel while buying my single-family home in Gilbert, AZ, and I couldn't be more satisfied with the experience. From the very beginning, Hiral demonstrated exceptional professionalism, knowledge of the local market, and a genuine commitment to helping me find the perfect home.Throughout the entire process, Hiral was incredibly responsive, always ready to answer questions and offer valuable insights. She took the time to truly understand my needs and preferences, ensuring that every property we viewed was in line with what I was looking for. She was patient, understanding, and never pressured me into making a decision, allowing me to make a confident choice when I finally found the right home.What stood out most was Hiral’s attention to detail and her ability to handle all the logistics seamlessly. She guided me through every step of the process, from the initial search to the closing day, and ensured everything was handled efficiently.Thanks to Hiral, I am now the proud owner of a beautiful home in Gilbert, and I couldn’t be happier with the entire experience. I highly recommend her to anyone looking for a knowledgeable, reliable, and dedicated realtor!Thank you, Hiral, for making this such a smooth and enjoyable journey!",
    name: "Neel Maniar",
    photo:
      "/testimonial2.png",
    position: "",
  },
  {
    message:
      "Heer Patel has helped me purchase a family and rental property. She is very professional and knowledgeable, understanding her work thoroughly. She is available at your convenience to discuss matters and comes up with a plan that meets your house requirements, scheduling house tours efficiently. My relationship with her doesn't end here; she will help me buy more rental properties. I highly recommend her to my friends and family and truly appreciate the work she has done for me.",
    name: "Mehul Patel",
    photo:
      "/OIP.jpg",
    position: "",
  },
  {
    message:
      "I had a fantastic experience with Hiralben.In this competitive market, she not only secured me a great deal but also guided me through the entire process with exceptional intuition and expertise. I highly recommend her services to anyone looking to buy a home!",
    name: "Nilesh Padhi",
    photo:
      "/OIP.jpg",
    position: "",
  },
  {
    message: "Heer has an excellent knowledge of real estate and she was extremely easy to contact!!!  There were almost 1 year waiting for new construction homes and others home has lottery system. She showed me Mosaic at Layton Lakes new construction home with ready to build without waiting or lottery. Her real estate knowledge also saved me from some terrible decisions. There are several negative selling points to homes that you don't notice until someone with real estate experience points them out! When you are only viewing a home for 15-30 minutes you need someone with her real estate knowledge and experience to look out for you. Buying a home is a significant investment and Heer will take the time to show you every house until you find the home you love!  I would definitely recommend Heer to anyone, not only is she pleasant to work with and easy to contact but she made sure I made a good investment I wouldn't regret!",
    name:'Rushit Mehta',
    photo:'./testimonial5.png',
    position:''
  }
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
                  <div className="testimonial-content bg-white px-6 py-4 rounded-lg  max-w-md max-h-[450px] overflow-y-auto mx-auto relative">
                    <div className=" absolute left-0 top-0 bottom-0 w-[2px] bg-[#03233F]"></div>
                    <p className="text-gray-700 text-start font-roboto text-[16px] ">
                      <RiDoubleQuotesL className="text-sky-400 " />
                      {testimonial.message}{" "}
                      <RiDoubleQuotesR className="text-sky-400" />
                    </p>
                    <p className="text-xl font-semibold mt-2 font-raleway text-black text-start ">
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
