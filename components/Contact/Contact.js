"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsEnvelope, BsArrowRight } from "react-icons/bs";

const EMAIL = "sudiptomitro2016@gmail.com";

const Contact = () => {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-3xl px-5 sm:px-10 py-16 md:py-20 flex flex-col items-center text-center"
      >
        {/* background — own overflow-hidden so it never clips content */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900" />

          {/* grid overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* glow orbs */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
            className="absolute -top-10 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            aria-hidden="true"
            className="absolute -bottom-10 right-1/4 w-56 h-56 bg-teal-400/20 rounded-full blur-3xl pointer-events-none"
          />
        </div>

        {/* content — sits outside overflow-hidden so it is never clipped */}
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* icon badge */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-7 shadow-lg shadow-cyan-500/20"
          >
            <BsEnvelope size={28} className="text-cyan-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight mb-4"
          >
            Got a project{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              in mind?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg max-w-sm mx-auto mb-10 leading-relaxed"
          >
            I&apos;m always open to new projects, creative ideas, or opportunities
            to be part of your vision.
          </motion.p>

          <motion.a
            href={`mailto:${EMAIL}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold text-base rounded-2xl shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow duration-300"
          >
            <BsEnvelope size={18} />
            Let&apos;s Talk
            <BsArrowRight size={18} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
