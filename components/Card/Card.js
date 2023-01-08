import React from "react";
import Image from "next/image";

const Card = ({ image, description, alt, title }) => {
  return (
    <>
      <div className="text-center p-10 shadow-[0_3px_8px_1px_rgba(0,0,0,0.3)] rounded-sm mb-6 md:mb-0 dark:bg-white">
        <Image
          src={image}
          alt={alt}
          width={100}
          height={100}
          className="mx-auto transition-all delay-100 hover:scale-110"
        />
        <h3 className="font-bold text-xl text-gray-800 py-4">{title}</h3>
        <p className="md:text-lg">{description}</p>
      </div>
    </>
  );
};

export default Card;
