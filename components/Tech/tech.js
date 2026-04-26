"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import react from "../../public/react.png";
import html from "../../public/html.png";
import css from "../../public/css.png";
import sass from "../../public/sass.png";
import drupal from "../../public/drupal.png";
import js from "../../public/js.png";
import tailwind from "../../public/tailwind.png";
import jqurey from "../../public/jqurey.png";
import linux from "../../public/linux.png";
import next from "../../public/next.svg";
import shopify from "../../public/shopify.png";
import vue from "../../public/vue.png";

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
    { img: tailwind, id: 4, alt: "Tailwind CSS" },
    { img: js, id: 5, alt: "JavaScript" },
    { img: jqurey, id: 6, alt: "jQuery" },
    { img: react, id: 7, alt: "React" },
    { img: next, id: 8, alt: "Next.js" },
    { img: drupal, id: 9, alt: "Drupal" },
    { img: linux, id: 10, alt: "Linux" },
    { img: shopify, id: 11, alt: "Shopify", scale: 1.5 },
    { img: vue, id: 12, alt: "Vue.js" },
  ];

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

      {/* AI Tools subsection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-14"
      >
        {/* divider label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-200 dark:to-cyan-800/60" />
          <span className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest uppercase text-cyan-500 whitespace-nowrap">
            <BsStars size={13} />
            AI Tools I Use Daily
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-200 dark:to-cyan-800/60" />
        </div>

        {/* tool badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {["Claude Code", "ChatGPT", "Antigravity", "GitHub Copilot", "Cursor"].map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              whileHover={{ scale: 1.06, y: -2 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-cyan-200 dark:border-cyan-800/70 bg-cyan-50 dark:bg-cyan-900/20 text-sm font-medium text-cyan-700 dark:text-cyan-300 cursor-default transition-colors duration-200 hover:border-cyan-400 dark:hover:border-cyan-600"
            >
              <BsStars size={12} />
              {tool}
            </motion.span>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-5 max-w-md mx-auto leading-relaxed">
          I regularly integrate AI tools into my workflow to accelerate development,
          improve code quality, and deliver better results faster.
        </p>
      </motion.div>
    </section>
  );
};

export default Tech;
