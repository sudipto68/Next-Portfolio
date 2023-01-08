import React from "react";
import Image from "next/image";
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

const Tech = () => {
  const allTech = [
    {
      img: html,
      id: 1,
      alt: "html",
    },
    {
      img: css,
      id: 2,
      alt: "css",
    },
    {
      img: sass,
      id: 3,
      alt: "sass",
    },
    {
      img: bootstrap,
      id: 4,
      alt: "bootstrap",
    },
    {
      img: js,
      id: 5,
      alt: "js",
    },
    {
      img: jqurey,
      id: 6,
      alt: "jqurey",
    },
    {
      img: react,
      id: 7,
      alt: "react",
    },
    {
      img: next,
      id: 8,
      alt: "next",
    },
    {
      img: drupal,
      id: 9,
      alt: "drupal",
    },
    {
      img: linux,
      id: 10,
      alt: "linux",
    },
  ];
  return (
    <>
      <section className="text-center my-8 md:my-10">
        <h2 className="text-xl md:text-2xl font-bold tracking-wider dark:text-white">
          Technology I am Using Everyday
        </h2>
        <div className="flex flex-wrap justify-center gap-10 pt-8">
          {allTech.map((item, index) => (
            <Image
              key={item.id}
              src={item.img}
              height={50}
              width={50}
              alt={item.alt}
              className="grayscale hover:grayscale-0 transition-all delay-100"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Tech;
