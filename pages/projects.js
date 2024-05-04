import React, { useState } from "react";
import { portfolioList } from "../utils/projectData";
import PortfolioCard from "../components/Card/PortfolioCard";
import { motion } from "framer-motion";

const Projects = () => {
  const types = ["React", "Drupal", "UI", "Django"];
  const [type, setType] = useState(types[0]);

  return (
    <div className="min-h-screen container mx-auto">
      <p className="text-lg text-gray-700 my-8 dark:text-white text-center uppercase">
        Here I have listed all the projects that I have done by myself and in my
        current organization.
      </p>
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
        className="flex justify-between md:justify-center gap-0 md:gap-28"
      >
        {types.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setType(item);
            }}
            className={`${
              item === type ? "bg-cyan-600" : "bg-gray-500"
            } inline-block m-2 ml-0 px-6 py-3 hover:bg-cyan-600 text-white font-semibold text-xs leading-tight tracking-widest  uppercase rounded shadow-md hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`}
          >
            {item}
          </button>
        ))}
      </motion.div>
      <div className="md:py-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolioList
          .filter((item) => item.category.toLowerCase() === type.toLowerCase())
          .map((item, index) => (
            <PortfolioCard
              key={index}
              name={item.name}
              alt={item.alt}
              description={item.description}
              image={item.image}
              live={item.live}
              github={item.github}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
