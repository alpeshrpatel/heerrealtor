import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import SectionTitle from "../components/SectionTitle";
import ProgressBar from "../components/ProgressBar";

const About = () => {
  return (
    <div
      className="container width-full mt-12 px-16 "
      id="about"
    >
      <SectionTitle title='About'/>
      <p className="mx-auto w-full mt-4 text-center">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>

      <div className="flex w-[80vw] justify-center sm:flex-col lg:flex-row mt-12">
        <div className="flex flex-col lg:flex-row">
          <div className="basis-1/3 flex justify-center">
            <img
              src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/profile-img.jpg"
              alt=""
              className="h-[65vh] w-[65vw] lg:h-[55vh] lg:w-[55vw] justify-center"
            />
          </div>

          <div className="basis-2/3 flex mt-4">
            <div className="flex flex-col">
              <p className="text-2xl ml-14  font-bold w-full ">
                UI/UX Designer & Web Developer.
              </p>
              <p className="w-full mt-4 ml-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="list-none w-full mt-4 ml-14 flex sm:flex-col lg:flex-row lg:gap-48">
                <div>
                  <li className="flex items-center mt-4">
                    <IoChevronForwardSharp className="mr-2" />
                    <span>
                      {" "}
                      <span className="font-bold">Birthday: </span>1 May 1995
                    </span>
                  </li>
                  <li className="flex items-center mt-4">
                    <IoChevronForwardSharp className="mr-2" />
                    <span>
                      {" "}
                      <span className="font-bold">Website:</span>{" "}
                      www.example.com
                    </span>
                  </li>
                  <li className="flex items-center  mt-4">
                    <IoChevronForwardSharp className="mr-2" />
                    <span>
                      {" "}
                      <span className="font-bold">Phone:</span> +123 456 7890
                    </span>
                  </li>
                  <li className="flex items-center  mt-4">
                    <IoChevronForwardSharp className="mr-2" />
                    <span>
                      {" "}
                      <span className="font-bold">City:</span> New York, USA
                    </span>
                  </li>
                </div>
                <div>
                  <li className="flex items-center  mt-4">
                    <IoChevronForwardSharp className="mr-2" />
                    <span>
                      {" "}
                      <span className="font-bold">Age:</span> 30
                    </span>
                  </li>
                  <li className="flex items-center  mt-4">
                    <IoChevronForwardSharp className="mr-2" />
                    <span>
                      {" "}
                      <span className="font-bold">Degree:</span> Master
                    </span>
                  </li>
                  <li className="flex items-center  mt-4">
                    <IoChevronForwardSharp className="mr-2" />
                    <span>
                      {" "}
                      <span className="font-bold">Email:</span>{" "}
                      email@example.com
                    </span>
                  </li>
                  <li className="flex items-center  mt-4">
                    <IoChevronForwardSharp className="mr-2" />
                    <span>
                      {" "}
                      <span className="font-bold">Freelance:</span> Available
                    </span>
                  </li>
                </div>
              </ul>
              <p className="w-full mt-8 ml-14 ">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row mt-36 mb-28 gap-8 lg:justify-evenly ">
        <span className="flex justify-center items-center flex-col gap-2">
          <div className="rounded-full bg-[#0563bb]  w-[54px] h-[54px] text-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-emoji-smile "
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">232</h2>
          <p>Happy Clients</p>
        </span>
        <span className="flex justify-center items-center flex-col gap-2">
          <div className="rounded-full bg-[#0563bb]  w-[54px] h-[54px] text-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-journal-richtext"
              viewBox="0 0 16 16"
            >
              <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">521</h2>
          <p>Projects</p>
        </span>
        <span className="flex justify-center items-center flex-col gap-2">
          <div className="rounded-full bg-[#0563bb]  w-[54px] h-[54px] text-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-headset"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">1463</h2>
          <p>Hours Of Support</p>
        </span>
        <span className="flex justify-center items-center flex-col gap-2">
          <div className="rounded-full bg-[#0563bb]  w-[54px] h-[54px] text-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-people"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">15</h2>
          <p>Hard Workers</p>
        </span>
      </div>
      <SectionTitle  title = 'Skills'/>
      <p className="mx-auto w-full mt-4 text-center ">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <ProgressBar/>
    </div>
  );
};

export default About;
