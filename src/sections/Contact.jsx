import React from "react";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <div
      id="contact"
      className="container  width-[100vw]  flex items-center justify-center flex-col"
    >
      <div className="container width-full mt-12 px-16 ">
        <SectionTitle title="Contact" />
        <p className="mx-auto w-full mt-4 text-center">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 space-y-4 lg:space-y-0 lg:space-x-4">
        <div
          className="flex-[0.9] p-6 h-auto  "
          
        >
          <div className="space-y-8">
            <div
              className="flex items-center group"
              
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-50 text-sky-500 text-xl mr-4 group-hover:bg-sky-500 group-hover:text-white transition duration-300">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-600">
                1774 E SAN CARLOS PL , CHANDLER, AZ - 85249
                </p>
              </div>
            </div>
            <div
              className="flex items-center group"
              
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-50 text-sky-500 text-xl mr-4 group-hover:bg-sky-500 group-hover:text-white transition duration-300">
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600">+1  480-310-9980</p>
              </div>
            </div>
            <div
              className="flex items-center group"
             
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-50 text-sky-500 text-xl mr-4 group-hover:bg-sky-500 group-hover:text-white transition duration-300">
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600">realtor.heer.p@gmail.com</p>
              </div>
            </div>
           
          </div>
        </div>

        <div
          className="flex-[1.3] bg-white p-8 h-auto "
          
        >
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div
                className="MainPage"
               
              >
                <label className="block text-black mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300"
                />
              </div>
              <div
                className="MainPage"
               
              >
                <label className="block text-black mb-1" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300"
                />
              </div>
            </div>
            <div
             
            >
              <label className="block text-black mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-2 border border-gray-300"
              />
            </div>
            <div
              
            >
              <label className="block text-black mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 h-40 overflow-hidden"
              ></textarea>
            </div>
            <div
              className="text-center"
             
            >
              <button
                type="submit"
                className="bg-blue-500 rounded-full text-white py-2 px-4 hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
