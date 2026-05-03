"use client";
import React, { useState } from "react";
import { portfolioList } from "../../utils/projectData";
import PortfolioCard from "../../components/Card/PortfolioCard";
import { motion } from "framer-motion";

const tabs = [
  { label: "Web App", categories: ["webapp", "react"] },
  { label: "Drupal",  categories: ["drupal"] },
  { label: "UI",      categories: ["ui"] },
  { label: "Django",  categories: ["django"] },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const activeCategories = tabs.find((t) => t.label === activeTab)?.categories ?? [];

  return (
    <div className="min-h-screen container mx-auto px-4">
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
        className="flex flex-wrap justify-center gap-3 md:gap-6"
      >
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActiveTab(tab.label)}
            className={`${
              tab.label === activeTab ? "bg-cyan-600" : "bg-gray-500"
            } px-5 py-2.5 md:px-6 md:py-3 hover:bg-cyan-600 text-white font-semibold text-xs leading-tight tracking-widest uppercase rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>
      <div className="py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioList
          .filter((item) => activeCategories.includes(item.category.toLowerCase()))
          .map((item, index) => (
            <PortfolioCard
              key={index}
              name={item.name}
              alt={item.alt}
              description={item.description}
              summary={item.summary}
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
