"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsPhoneLandscape, BsCodeSlash, BsChatDots } from "react-icons/bs";

const services = [
  {
    id: "01",
    Icon: BsPhoneLandscape,
    title: "Responsive Design",
    description:
      "Creating fully responsive, mobile-friendly websites using modern tech stacks that look great on every screen and device.",
  },
  {
    id: "02",
    Icon: BsCodeSlash,
    title: "Modern Technologies",
    description:
      "Building web and mobile applications with React.js, Next.js, Vue.js and React Native — fast, scalable, and production-ready.",
  },
  {
    id: "03",
    Icon: BsChatDots,
    title: "Excellent Communication",
    description:
      "Clear, consistent communication with every client — understanding your needs and delivering exactly what you envision.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.13, ease: "easeOut" },
  }),
};

const ServiceCard = ({ service, index }) => {
  const { Icon, id, title, description } = service;
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="group relative flex items-center gap-6 md:gap-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-l-4 border-gray-100 dark:border-gray-800 border-l-cyan-300/50 hover:border-l-cyan-400 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-default overflow-hidden"
    >
      {/* ghost number watermark */}
      <span
        aria-hidden="true"
        className="absolute right-5 top-1/2 -translate-y-1/2 text-[7rem] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(34,211,238,0.045)" }}
      >
        {id}
      </span>

      {/* icon badge */}
      <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-md shadow-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/50 group-hover:scale-105 transition-all duration-300">
        <Icon size={26} className="text-white" />
      </div>

      {/* divider */}
      <div className="hidden sm:block flex-shrink-0 w-px h-14 bg-gray-100 dark:bg-gray-800 group-hover:bg-cyan-200/60 dark:group-hover:bg-cyan-800/40 transition-colors duration-300" />

      {/* content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2.5 mb-1.5">
          <span className="font-mono text-xs font-bold text-cyan-500 tracking-[0.15em]">
            {id}
          </span>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
            {title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>

      {/* sliding bottom accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-500 ease-out" />
    </motion.div>
  );
};

const Service = () => {
  return (
    <section className="py-8 relative">
      {/* dot-grid background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(34,211,238,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

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

      <div className="flex flex-col gap-4">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Service;
