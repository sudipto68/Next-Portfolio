"use client";
import React from "react";
import Link from "next/link";
import PortfolioCard from "../Card/PortfolioCard";
import { portfolioList } from "../../utils/projectData";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-xl md:text-2xl font-bold tracking-wider dark:text-white mb-3">
          Recent Projects
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" />
      </motion.div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {portfolioList.slice(0, 4).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mt-8 md:mt-0 h-full"
          >
            <PortfolioCard
              name={item.name}
              alt={item.alt}
              description={item.description}
              image={item.image}
              live={item.live}
              github={item.github}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <Link
          href="/projects"
          className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          More Projects <span className="ml-2">&#10141;</span>
        </Link>
      </motion.div>
    </section>
  );
};

export default Portfolio;
