"use client";
import React from "react";
import { motion } from "framer-motion";
import { experienceList } from "../../utils/experienceData";

const Experience = () => {
  return (
    <section className="py-6 md:py-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 md:mb-14"
      >
        <h2 className="text-xl md:text-2xl font-bold tracking-wider dark:text-white mb-3">
          Work Experience
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" />
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-3 md:left-8 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-400 via-teal-400 to-transparent" />

        <div className="space-y-4 md:space-y-10">
          {experienceList.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 md:pl-24"
            >
              {/* Timeline dot */}
              <div className="absolute left-[5px] md:left-[25px] top-4 md:top-5 flex items-center justify-center">
                <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-white dark:border-gray-900 shadow-md z-10 ${exp.current ? "bg-gradient-to-br from-cyan-400 to-teal-400" : "bg-gray-300 dark:bg-gray-600"}`} />
                {exp.current && (
                  <div className="absolute w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-400 opacity-40 animate-ping" />
                )}
              </div>

              {/* Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-cyan-200 dark:hover:border-cyan-700 transition-all duration-300 group">
                {/* Header row */}
                <div className="flex items-start justify-between gap-2 mb-2 md:mb-4">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-500 font-semibold text-xs md:text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className={`text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 rounded-full ${exp.current ? "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"}`}>
                      {exp.current ? "Current" : exp.type}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 text-right">
                      {exp.duration}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 text-right hidden sm:block">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description bullets */}
                <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-2 md:gap-y-1.5 mb-3 md:mb-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-snug md:leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1 md:gap-1.5 pt-2 md:pt-3 border-t border-gray-100 dark:border-gray-700">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 md:px-2.5 py-0.5 md:py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
