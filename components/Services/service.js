import React from "react";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import Card from "../Card/Card";

import { motion } from "framer-motion";

const Service = () => {
  const serviceList = [
    {
      img: design,
      alt: "design",
      title: "Responsive Design",
      description:
        "Creating fully responsive Mobile friendly websites using modern Tech stackes that looks great both on Web and Mobile devices.",
    },
    {
      img: code,
      alt: "code",
      title: "Modern Technologies",
      description:
        "Creating Web and Mobile Applications using Modern Technologies like React JS, Next JS, React Native.",
    },
    {
      img: consulting,
      alt: "consulting",
      title: "Excellent Communication",
      description:
        "I always try to make good communication with my clients and provide them what they need.",
    },
  ];
  return (
    <section>
      <h2 className="text-xl md:text-2xl text-center md:pt-3 font-bold tracking-wider dark:text-white">
        Services I Offer
      </h2>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true, margin: "100px 0px 0px 0px" }}
        className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-8"
      >
        {serviceList.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            alt={service.alt}
            image={service.img}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Service;
