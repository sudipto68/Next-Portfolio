"use client";
import React from "react";
import Nav from "../Nav/nav.js";
import { useState } from "react";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Nav handleClick={handleClick} darkMode={darkMode} />
          <main>{children}</main>
          <footer className="py-6 text-center text-sm text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Sudipto Kumar Mitra. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
