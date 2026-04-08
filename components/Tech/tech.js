"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import react from "../../public/react.png";
import html from "../../public/html.png";
import css from "../../public/css.png";
import sass from "../../public/sass.png";
import drupal from "../../public/drupal.png";
import js from "../../public/js.png";
import bootstrap from "../../public/bootstrap.png";
import jqurey from "../../public/jqurey.png";
import linux from "../../public/linux.png";
import next from "../../public/next.svg";
import shopify from "../../public/shopify.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Tech = () => {
  const allTech = [
    { img: html, id: 1, alt: "HTML" },
    { img: css, id: 2, alt: "CSS" },
    { img: sass, id: 3, alt: "SASS" },
    { img: bootstrap, id: 4, alt: "Bootstrap" },
    { img: js, id: 5, alt: "JavaScript" },
    { img: jqurey, id: 6, alt: "jQuery" },
    { img: react, id: 7, alt: "React" },
    { img: next, id: 8, alt: "Next.js" },
    { img: drupal, id: 9, alt: "Drupal" },
    { img: linux, id: 10, alt: "Linux" },
    { img: shopify, id: 11, alt: "Shopify", scale: 1.5 },
  ];

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-xl md:text-2xl font-bold tracking-wider dark:text-white mb-3">
          Technology I am Using Everyday
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 md:gap-8"
      >
        {allTech.map((item) => (
          <motion.div
            key={item.id}
            variants={iconVariants}
            whileHover={{ y: -6, scale: 1.1 }}
            className="group flex flex-col items-center gap-2 cursor-default"
          >
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-sm group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-all duration-300 border border-transparent group-hover:border-cyan-200 dark:group-hover:border-cyan-700 flex items-center justify-center w-[80px] h-[80px]">
              <div
                className="relative w-12 h-12"
                style={item.scale ? { transform: `scale(${item.scale})` } : {}}
              >
                <Image
                  src={item.img}
                  fill
                  alt={item.alt}
                  style={{ objectFit: "contain" }}
                  className="grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500 tracking-wide group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
              {item.alt}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Tech;
