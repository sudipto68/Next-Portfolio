import React from "react";
import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";

const Portfolio = () => {
  const portfolioList = [
    {
      name: "Redux Commerce",
      image: web1,
      alt: "Redux Commerce",
      id: 1,
      description:
        "React Js, React Router, Redux Toolkit, React Bootstrap, Tostify",
      live: "https://rtk-commerce.netlify.app/",
      github: "https://github.com/sudipto68/redux-toolkit-ecommerce-pratice",
    },
    {
      name: "Triplo Headless",
      image: web3,
      alt: "Triplo Headless",
      id: 2,
      description: "React Js, React Router, React Bootstrap, Backdrop CMS",
      live: "http://headless-react.dev.triplo.co/",
      github: "",
    },
    {
      name: "Interrior",
      image: web2,
      alt: "Interrior",
      id: 3,
      description:
        "React Js, React Router, React Bootstrap, Express JS, Firebase",
      live: "https://interrior-366e5.web.app/",
      github: "https://github.com/sudipto68/Interrior-client",
    },
  ];
  return (
    <>
      <section>
        <h2 className="text-xl md:text-2xl text-center font-bold tracking-wider dark:text-white">
          Recent Projects
        </h2>
        <div className="py-8 md:py-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioList.map((item, index) => (
            <div className="flex justify-center mt-8 md:mt-0" key={item.id}>
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <Image
                  className="rounded-t-lg"
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={400}
                />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {item.name}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Used Technology: <br />
                    {item.description}
                  </p>
                  <div className="flex gap-5">
                    <a
                      href={item.live}
                      className=" inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Live Link
                    </a>
                    <a
                      href={item.github || "#"}
                      className=" inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
