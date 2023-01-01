import Image from "next/image";
import React from "react";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";

const Service = () => {
  return (
    <section>
      <h2 className="text-xl md:text-2xl text-center font-bold tracking-wider">
        Services I Offer
      </h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        <div className="text-center p-10 shadow-lg rounded-sm mb-4">
          <Image
            src={design}
            alt="design"
            width={100}
            height={100}
            className="mx-auto transition-all delay-100 hover:scale-110"
          />
          <h3 className="font-bold text-xl text-gray-800 py-4">
            Responsive Design
          </h3>
          <p className="md:text-lg">
            Creating fully responsive Mobile friendly websites using modern Tech
            stackes that looks great both on Web and Mobile devices.
          </p>
        </div>
        <div className="text-center p-10 shadow-lg rounded-sm mb-4">
          <Image
            src={code}
            alt="design"
            width={100}
            height={100}
            className="mx-auto transition-all delay-100 hover:scale-110"
          />
          <h3 className="font-bold text-xl text-gray-800 py-4">
            Modern Technologies
          </h3>
          <p className="md:text-lg">
            Creating Web and Mobile Applications using Modern Technologies like
            React JS, Next JS, React Native.
          </p>
        </div>
        <div className="text-center p-10 shadow-lg rounded-sm mb-4">
          <Image
            src={consulting}
            alt="design"
            width={100}
            height={100}
            className="mx-auto transition-all delay-100 hover:scale-110"
          />
          <h3 className="font-bold text-xl text-gray-800 py-4">
            Excellent Communication
          </h3>
          <p className="md:text-lg">
            I always try to make good communication with my clients and provide
            them what they need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
