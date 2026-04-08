import React from "react";
import Image from "next/image";

const Card = ({ image, description, alt, title }) => {
  return (
    <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-cyan-200 dark:hover:border-cyan-700 transition-all duration-300 group mb-6 md:mb-0 h-full flex flex-col items-center">
      <div className="w-20 h-20 mb-5 rounded-full bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center flex-shrink-0">
        <Image
          src={image}
          alt={alt}
          width={52}
          height={52}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="font-bold text-xl text-gray-800 dark:text-white pb-3">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{description}</p>
    </div>
  );
};

export default Card;
