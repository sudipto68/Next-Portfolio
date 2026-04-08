"use client";
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
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-xl md:text-2xl font-bold tracking-wider dark:text-white mb-3">
          Services I Offer
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" />
      </motion.div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {serviceList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card
              title={service.title}
              description={service.description}
              alt={service.alt}
              image={service.img}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
