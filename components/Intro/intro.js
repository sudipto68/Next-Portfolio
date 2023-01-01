import React from "react";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import devImage from "../../public/dev.png";

const Intro = () => {
  return (
    <>
      <section className="text-center">
        <div className="relative text-center flex justify-center">
          <Image src={devImage} alt="avatar" width="200" height="200" />
        </div>
        <h2 className="text-3xl text-teal-500 pt-4">Sudipto Kumar Mitra</h2>
        <h3 className="text-xl py-2 text-gray-800 font-bold tracking-wider">
          Frontend Developer
        </h3>
        <p className=" text-md md:text-lg py-2 leading-6 text-gray-800 max-w-prose mx-auto text-justify">
          I am an experienced Frontend web Developer who likes problem solving
          and am a curious mind who loves learning. With hard work, dedication
          and persistence I always try to find effective solutions to complex
          problems. My objective is to continually grow via a rewarding and
          challenging career in software development.
        </p>
        <div className="flex gap-10 justify-center py-4 text-2xl">
          <a
            href="https://github.com/sudipto68"
            target="_blank"
            rel="no-refferer noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sudipto-kumar-mitra/"
            target="_blank"
            rel="no-refferer noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.facebook.com/sudipto.kumar.mitro"
            target="_blank"
            rel="no-refferer noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
      </section>
    </>
  );
};

export default Intro;
