"use client";
import React from "react";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsFacebook, BsChevronDown } from "react-icons/bs";
import devImage from "../../public/dev.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const socialLinks = [
  { href: "https://github.com/sudipto68", Icon: BsGithub },
  { href: "https://www.linkedin.com/in/sudipto-kumar-mitra/", Icon: BsLinkedin },
  { href: "https://www.facebook.com/sudipto.kumar.mitro", Icon: BsFacebook },
];

const Intro = () => {
  return (
    <section className="min-h-[90vh] flex flex-col py-10">
      <div className="flex-1 flex items-center">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left"
        >
          <motion.p
            variants={itemVariants}
            className="text-cyan-500 font-semibold tracking-widest uppercase text-sm mb-3"
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Sudipto Kumar Mitra
            </span>
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 tracking-wider"
          >
            Frontend Developer
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            I am an experienced Frontend Web Developer who likes problem solving
            and am a curious mind who loves learning. With hard work, dedication
            and persistence I always try to find effective solutions to complex
            problems. My objective is to continually grow via a rewarding and
            challenging career in software development.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center md:justify-start mt-8"
          >
            {socialLinks.map(({ href, Icon }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-colors duration-300"
              >
                <Icon className="text-xl" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
          }}
          className="relative flex-shrink-0"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 blur-3xl opacity-25 scale-110" />
          {/* Gradient ring */}
          <div className="relative rounded-full p-[3px] bg-gradient-to-br from-cyan-400 to-teal-500">
            <div className="rounded-full overflow-hidden bg-white dark:bg-gray-900">
              <Image
                src={devImage}
                alt="avatar"
                width={280}
                height={280}
                className="rounded-full"
              />
            </div>
          </div>
          {/* Spinning dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-12px] rounded-full border-2 border-dashed border-cyan-300/50 dark:border-cyan-600/50"
          />
        </motion.div>
      </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex justify-center pb-4"
      >
        <motion.button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll down"
          className="p-2 rounded-full text-gray-400 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300"
        >
          <BsChevronDown className="text-2xl" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Intro;
