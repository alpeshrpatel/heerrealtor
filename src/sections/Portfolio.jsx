import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { useNavigate } from "react-router-dom";

const links = ["All", "App", "Card", "Web"];

const imageData = [
  {
    id: 1,
    name: "Scottsdale",
    category: "App",
    image:
      "/scottsdale.jpg",
    description: "Known for its upscale living, vibrant arts scene, and luxurious resorts",
  },
  {
    id: 2,
    name: "Tempe",
    category: "Card",
    image:
      "/tempe.jpg",
    description: "A college town, home to Arizona State University, with a youthful vibe",
  },
  {
    id: 3,
    name: "Mesa",
    category: "Web",
    image:
      "/mesa.jpg",
    description: "A family-friendly suburb with excellent schools and cultural attractions",
  },
  {
    id: 4,
    name: "Chandler",
    category: "App",
    image:
      "/chandler.jpg",
    description: "Known for its tech industry and growing population.",
  },
  {
    id: 5,
    name: "Gilbert",
    category: "Card",
    image:
      "/gilbert.jpg",
    description: "A rapidly growing suburb with a small-town feel and excellent amenities",
  },
  {
    id: 6,
    name: "Glendale",
    category: "Web",
    image:
      "/glendale.jpg",
    description: "Famous for its sports venues and historic downtown.",
  },
  {
    id: 7,
    name: "Peoria",
    category: "App",
    image:
      "/peoria.jpg",
    description: "Offers a mix of suburban living and access to outdoor activities.",
  },
  {
    id: 8,
    name: "Paradise Valley ",
    category: "Card",
    image:
      "/paradise.jpg",
    description: "Known for its affluent residents, luxury homes, and scenic views.",
  },
  {
    id: 9,
    name: "Surprise ",
    category: "Web",
    image:
      "/surprise.jpg",
    description: "A quieter suburb with plenty of parks and recreation options.",
  },
  {
    id: 10,
    name: "Goodyear",
    category: "Web",
    image:
      "/goodyear.jpg",
    description: "One of the fastest-growing suburbs, with newer developments and proximity to",
  },
];

const Portfolio = () => {
  // const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredData =
    activeLink === "All"
      ? imageData
      : imageData.filter((item) => item.category === activeLink);

  const handleZoomInClick = (item, index) => {
    setSelectedImage(item);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleLinkClick = () => {
    // navigate("/portfolio_details");
  };

  const handleNext = () => {
    const currentCategoryItems = data.filter(
      (item) => item.category === selectedImage.category
    );
    const currentIndex = currentCategoryItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % currentCategoryItems.length;
    setSelectedImage(currentCategoryItems[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const handlePrev = () => {
    const currentCategoryItems = data.filter(
      (item) => item.category === selectedImage.category
    );
    const currentIndex = currentCategoryItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + currentCategoryItems.length) %
      currentCategoryItems.length;
    setSelectedImage(currentCategoryItems[prevIndex]);
    setSelectedIndex(prevIndex);
  };
  return (
    <div
      id="portfolio"
      className="container width-[100vw]  flex items-center justify-center flex-col"
    >
      <div className="container width-full mt-12 px-16 ">
        <SectionTitle title="Explore Our Featured Areas" />
        <p className="mx-auto w-full mt-4 text-center">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="mt-16">
        <nav
          className="flex justify-center flex-wrap gap-2 mb-8"
          data-sal="slide-up"
          data-sal-duration="1000"
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`text-sm bg-transparent border-none cursor-pointer ${
                activeLink === link ? "text-[#0563bb]" : "text-gray-800"
              }`}
            >
              {link}
            </button>
          ))}
        </nav>
        <div className="columns-1 lg:columns-3 gap-4">
          {filteredData.map((item, index) => (
            <div key={item.id} className="relative mb-4">
              <div className="border bg-white shadow overflow-hidden group ">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover duration-300 "
                  />
                </div>
                <div className="flex justify-between items-center bg-white opacity-85">
                  <div className="absolute invisible bottom-0 basis-1/2 w-[50%] h-24 p-2 text-gray-700 bg-white   group-hover:visible transition-all ease-in-out duration-500">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm ">{item.description}</p>
                  </div>
                  <div className="absolute flex justify-end gap-4 basis-1/2 invisible bottom-0 right-0 w-[50%] h-24 p-2 text-gray-700 bg-white   group-hover:visible transition-all ease-in-out duration-500">
                    <button
                      className=""
                      onClick={() => handleZoomInClick(item, index)}
                    >
                      <img
                        src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                        alt="Zoom In"
                        className="w-6 h-6"
                      />
                    </button>
                    <button
                      className=""
                      onClick={() => handleLinkClick(item.name)}
                    >
                      <img alt="Link" className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <button
            className="absolute top-2 right-4 text-gray-400 text-5xl  rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </button>
          <button
            className="absolute left-0 text-white text-3xl ml-5 p-2 rounded-full"
            onClick={handlePrev}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <button
            className="absolute right-0 text-white text-3xl mr-5 p-2 rounded-full"
            onClick={handleNext}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
          <div className="bg-white max-w-screen-lg flex flex-col items-center relative">
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="max-w-[100%] max-h-[calc(100vh-85px)] mx-auto transition-transform duration-300"
            />
            <p className="text-lg text-left w-full p-6 py-7 bg-white">
              {selectedImage.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
