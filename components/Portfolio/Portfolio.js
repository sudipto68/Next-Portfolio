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
        <h2 className="text-xl md:text-2xl text-center font-bold tracking-wider">
          Portfolio
        </h2>
        <div className="my-8 md:my-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioList.map((item, index) => (
            <div className="mt-8 md:mt-0" key={item.id}>
              <Image
                src={item.image}
                alt={item.alt}
                height={400}
                width={400}
                className="hover:scale-105 transition duration-300 ease-in-out"
              />
              <h3 className=" text-md md:text-lg py-3">
                {" "}
                Project Name: {item.title}
              </h3>
              <p className="text-gray-800">
                Used Technology : <br />
                {item.description}
              </p>
              <div className="my-3 flex gap-3">
                <a
                  href={item?.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold bg-cyan-500 px-4 py-2 rounded-md"
                >
                  Live Link
                </a>
                <a
                  href={item?.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold bg-cyan-500 px-4 py-2 rounded-md"
                >
                  Github Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
