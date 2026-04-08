"use client";
import React from "react";
import Image from "next/image";

const PortfolioCard = ({ name, alt, image, description, live, github }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-cyan-200 dark:hover:border-cyan-700 transition-all duration-300 group h-full flex flex-col">
      <div className="overflow-hidden h-[180px] flex-shrink-0">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
          alt={alt}
          width={400}
          height={180}
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h5 className="text-gray-900 dark:text-white text-base font-semibold mb-3 uppercase tracking-wide">
          {name}
        </h5>
        <div className="flex flex-wrap gap-1.5 mb-4 flex-1 content-start">
          {description.map((item, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium text-xs rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium text-sm rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Live Link
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium text-sm rounded-lg hover:border-cyan-500 hover:text-cyan-500 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-all duration-300"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
