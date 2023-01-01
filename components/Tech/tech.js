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

const Tech = () => {
  return (
    <>
      <section className="text-center my-8 md:my-20">
        <h2 className="text-xl md:text-2xl font-bold tracking-wider">
          Technology I am Using Everyday
        </h2>
        <div className="flex flex-wrap justify-center gap-10 pt-8">
          <Image
            src={html}
            height={50}
            width={50}
            alt="html"
            className="grayscale hover:grayscale-0 transition-all delay-100"
          />
          <Image
            src={css}
            height={50}
            width={50}
            alt="css"
            className="grayscale hover:grayscale-0 transition-all delay-100"
          />
          <Image
            src={sass}
            height={50}
            width={50}
            alt="sass"
            className="grayscale hover:grayscale-0 transition-all delay-100"
          />
          <Image
            src={bootstrap}
            height={50}
            width={50}
            alt="bootstrap"
            className="grayscale hover:grayscale-0 transition-all delay-100"
          />
          <Image
            src={js}
            height={50}
            width={50}
            alt="js"
            className="grayscale hover:grayscale-0 transition-all delay-100"
          />
          <Image
            src={jqurey}
            height={50}
            width={50}
            alt="jQuery"
            className="grayscale hover:grayscale-0 transition-all delay-100"
          />
          <Image
            src={react}
            height={50}
            width={50}
            alt="react"
            className="grayscale hover:grayscale-0 transition-all delay-100"
          />
          <Image
            src={drupal}
            height={50}
            width={50}
            alt="drupal"
            title="Drupal"
            className="grayscale hover:grayscale-0 transition-all delay-100"
          />
        </div>
      </section>
    </>
  );
};

export default Tech;
