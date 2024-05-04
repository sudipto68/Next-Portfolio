"use client";
import React from "react";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import devImage from "../../public/dev.png";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <section className="text-center">
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
          className="relative text-center flex justify-center"
        >
          <Image src={devImage} alt="avatar" width="200" height="200" />
        </motion.div>
        <motion.h2
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
          className="text-3xl text-teal-500 pt-4"
        >
          Sudipto Kumar Mitra
        </motion.h2>
        <motion.h3
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
          className="text-xl py-2 text-gray-800 font-bold tracking-wider dark:text-white"
        >
          Frontend Developer
        </motion.h3>
        <motion.p
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
          className="dark:text-white text-md md:text-lg py-2 leading-6 text-gray-800 max-w-prose mx-auto text-justify"
        >
          I am an experienced Frontend web Developer who likes problem solving
          and am a curious mind who loves learning. With hard work, dedication
          and persistence I always try to find effective solutions to complex
          problems. My objective is to continually grow via a rewarding and
          challenging career in software development.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: "50%" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 2,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true, margin: "0px 100px 0px 0px" }}
          className="flex gap-10 justify-center py-4 text-2xl"
        >
          <a
            href="https://github.com/sudipto68"
            target="_blank"
            rel="no-refferer noreferrer"
          >
            <BsGithub className="dark:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/sudipto-kumar-mitra/"
            target="_blank"
            rel="no-refferer noreferrer"
          >
            <BsLinkedin className="dark:text-white" />
          </a>
          <a
            href="https://www.facebook.com/sudipto.kumar.mitro"
            target="_blank"
            rel="no-refferer noreferrer"
          >
            <BsFacebook className="dark:text-white" />
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Intro;
