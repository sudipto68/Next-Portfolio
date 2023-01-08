import React from "react";
import Link from "next/link";
import PortfolioCard from "../Card/PortfolioCard";
import { portfolioList } from "../../utils/projectData";

const Portfolio = () => {
  return (
    <>
      <section className="pb-8">
        <h2 className="text-xl md:text-2xl text-center md:pt-6 font-bold tracking-wider dark:text-white">
          Recent Projects
        </h2>
        <div className="md:py-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioList.slice(0, 3).map((item, index) => (
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
        <div className="mt-10 md:mt-0 mx-auto text-center">
          <Link
            href="/projects"
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-md text-white"
          >
            More Projects <span className="ml-2 text-xl">&#10141;</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
