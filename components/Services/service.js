import Image from "next/image";
import React from "react";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";

const Service = () => {
  const serviceList = [
    {
      img: design,
      alt: "design",
      title: "Responsive Design",
      description:
        "Creating fully responsive Mobile friendly websites using modern Tech stackes that looks great both on Web and Mobile devices.",
    },
    {
      img: code,
      alt: "code",
      title: "Modern Technologies",
      description:
        "Creating Web and Mobile Applications using Modern Technologies like React JS, Next JS, React Native.",
    },
    {
      img: consulting,
      alt: "consulting",
      title: "Excellent Communication",
      description:
        "I always try to make good communication with my clients and provide them what they need.",
    },
  ];
  return (
    <section>
      <h2 className="text-xl md:text-2xl text-center font-bold tracking-wider">
        Services I Offer
      </h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {serviceList.map((service, index) => (
          <div
            className="text-center p-10 shadow-lg rounded-sm mb-4"
            key={index}
          >
            <Image
              src={service.img}
              alt={service.alt}
              width={100}
              height={100}
              className="mx-auto transition-all delay-100 hover:scale-110"
            />
            <h3 className="font-bold text-xl text-gray-800 py-4">
              {service.title}
            </h3>
            <p className="md:text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
