import Image from "next/image";
import React from "react";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";

const Service = () => {
  return (
    <section>
      <h2 className="text-xl md:text-2xl text-center font-bold tracking-wider">
        Serevices I Offer
      </h2>
      <div className="md:flex gap-10 my-10">
        <div className="text-center p-10 shadow-lg rounded-sm my-4">
          <Image
            src={design}
            alt="design"
            width={100}
            height={100}
            className="mx-auto transition-all delay-100 hover:scale-110"
          />
          <h3 className="font-bold text-xl text-gray-800 py-4">
            Resonsive Design
          </h3>
          <p className="md:text-lg">
            Creating fully responsive mobile friendly websites using mordern
            tech stackes that looks great both on Web and mobile devices
          </p>
        </div>
        <div className="text-center p-10 shadow-lg rounded-sm my-4">
          <Image
            src={code}
            alt="design"
            width={100}
            height={100}
            className="mx-auto transition-all delay-100 hover:scale-110"
          />
          <h3 className="font-bold text-xl text-gray-800 py-4">
            Resonsive Design
          </h3>
          <p className="md:text-lg">
            Creating fully responsive mobile friendly websites that looks great
            both on Web and mobile devices
          </p>
        </div>
        <div className="text-center p-10 shadow-lg rounded-sm my-4">
          <Image
            src={consulting}
            alt="design"
            width={100}
            height={100}
            className="mx-auto transition-all delay-100 hover:scale-110"
          />
          <h3 className="font-bold text-xl text-gray-800 py-4">
            Resonsive Design
          </h3>
          <p className="md:text-lg">
            Creating fully responsive mobile friendly websites that looks great
            both on Web and mobile devices
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
