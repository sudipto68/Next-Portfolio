import React from "react";
import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";

const Portfolio = () => {
  return (
    <>
      <section>
        <h2 className="text-xl md:text-2xl text-center font-bold tracking-wider">
          Portfolio
        </h2>
        <div className="my-8 md:my-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <Image src={web1} alt="Web1" height={400} width={400} />
            <h3 className=" text-md md:text-lg py-3">
              {" "}
              Project Name: Redux Commerce
            </h3>
            <p className="text-gray-800">
              Used Technology : <br />
              React Js, React Router, Redux Toolkit, React Bootstrap, Tostify
            </p>
            <div className="my-3 flex gap-3">
              <a
                href="https://rtk-commerce.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold bg-cyan-500 px-4 py-2 rounded-md"
              >
                Live Link
              </a>
              <a
                href="https://github.com/sudipto68/redux-toolkit-ecommerce-pratice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold bg-cyan-500 px-4 py-2 rounded-md"
              >
                Github Link
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image src={web3} alt="Web1" height={400} width={400} />
            <h3 className=" text-md md:text-lg py-3">
              {" "}
              Project Name: Triplo Headless
            </h3>
            <p className="text-gray-800">
              Used Technology : <br />
              React Js, React Router, React Bootstrap, Backdrop CMS
            </p>
            <div className="my-3 flex gap-3">
              <a
                href="http://headless-react.dev.triplo.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold bg-cyan-500 px-4 py-2 rounded-md"
              >
                Live Link
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image src={web2} alt="Web1" height={400} width={400} />
            <h3 className=" text-md md:text-lg py-3">
              {" "}
              Project Name: Interrior
            </h3>
            <p className="text-gray-800">
              Used Technology : <br />
              React Js, React Router, React Bootstrap, Express JS, Firebase
            </p>
            <div className="my-3 flex gap-3">
              <a
                href="https://interrior-366e5.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold bg-cyan-500 px-4 py-2 rounded-md"
              >
                Live Link
              </a>
              <a
                href="https://github.com/sudipto68/Interrior-client"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold bg-cyan-500 px-4 py-2 rounded-md"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
