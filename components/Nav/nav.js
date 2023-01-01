import Link from "next/link";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Nav = ({ handleClick, darkMode }) => {
  return (
    <>
      <section>
        <nav className=" py-10 mb-12 flex justify-between">
          <Link
            href="/"
            className="text-xl font-burtons uppercase tracking-widest dark:text-white"
          >
            Sudipto
          </Link>
          <ul className="flex items-center">
            <li>
              {darkMode ? (
                <BsFillSunFill
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                  }}
                  className="text-white cursor-pointer text-2xl"
                />
              ) : (
                <BsFillMoonStarsFill
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                  }}
                  className=" cursor-pointer text-2xl"
                />
              )}
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1P8qOxcxFOFme72znc7wBOHEnwfzv6RX9/view?usp=share_link"
                className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Nav;
