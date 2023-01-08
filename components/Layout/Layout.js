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
      <div className="bg-white px-10 dark:bg-gray-900">
        <Nav handleClick={handleClick} darkMode={darkMode} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
