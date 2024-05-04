import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PortfolioCard = ({ name, alt, image, description, live, github }) => {
  return (
    <>
      <div className="flex justify-center mt-8 md:mt-0">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <Image
            className="rounded-t-lg"
            src={image}
            alt={alt}
            width={400}
            height={400}
          />
          <div className="p-6">
            <h5 className="text-gray-900 text-lg font-medium mb-2 uppercase">
              {name}
            </h5>
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: true, margin: "100px 0px 0px 0px" }}
              className="text-base mb-4"
            >
              {description.map((item, index) => (
                <div
                  key={index}
                  className="inline-block m-2 ml-0 px-3 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                >
                  {item}
                </div>
              ))}
            </motion.div>
            <div className="flex gap-5">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className=" inline-block px-4 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
              >
                Live Link
              </a>
              {github ? (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-block px-4 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Github Link
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
