import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import gloz from "../public/gloz.png";
import web4 from "../public/web4.png";
import bio from "../public/bio.png";
import fmr from "../public/fmr.png";
import portfolio from "../public/portfolio.png";

export const portfolioList = [
  {
    name: "Redux Commerce",
    image: web1,
    alt: "Redux Commerce",
    category: "react",
    id: 1,
    description: [
      "React Js",
      "React Router",
      "React Bootstrap",
      "Redux Toolkit",
      "Tostify",
      "SASS",
    ],
    live: "https://rtk-commerce.netlify.app/",
    github: "https://github.com/sudipto68/redux-toolkit-ecommerce-pratice",
  },
  {
    name: "Triplo Headless",
    image: web3,
    alt: "Triplo Headless",
    category: "react",
    id: 2,
    description: [
      "React Js",
      "React Router",
      "React Bootstrap",
      "React Hook Form",
      "Backdrop CMS",
      "SASS",
    ],
    live: "http://headless-react.dev.triplo.co/",
    github: "",
  },
  {
    name: "Interrior",
    image: web2,
    alt: "Interrior",
    category: "react",
    id: 3,
    description: [
      "React Js",
      "React Router",
      "React Bootstrap",
      "Express JS",
      "MongoDB",
      "Firebase",
    ],
    live: "https://interrior-366e5.web.app/",
    github: "https://github.com/sudipto68/Interrior-client",
  },
  {
    name: "Next Portfolio",
    image: portfolio,
    alt: "Portfolio",
    category: "react",
    id: 8,
    description: ["Next Js", "Tailwind Css"],
    live: "https://sudipto-portfolio.vercel.app/",
    github: "https://github.com/sudipto68/Next-Portfolio",
  },
  {
    name: "Glozzom",
    image: gloz,
    alt: "Glozzom",
    category: "ui",
    id: 4,
    description: ["Html", "SASS", "Bootstrap"],
    live: "https://sudipto68.github.io/Glozzom/",
    github: "https://github.com/sudipto68/Glozzom",
  },
  {
    name: "Nike Clone",
    image: web4,
    alt: "Nike",
    category: "ui",
    id: 5,
    description: ["Html", "CSS", "Bootstrap"],
    live: "https://sudipto68.github.io/Responsive-Ecommerce-Web/",
    github: "https://github.com/sudipto68/Responsive-Ecommerce-Web",
  },
  {
    name: "Biological Purposes",
    image: bio,
    alt: "BioLogical Purpose",
    category: "drupal",
    id: 6,
    description: ["Drupal 9", "SASS", "jQuery"],
    live: "https://www.biologicalpurpose.org/",
    github: "",
  },
  {
    name: "FMR",
    image: fmr,
    alt: "FMR",
    category: "drupal",
    id: 7,
    description: ["Backdrop CMS", "SASS", "jQuery"],
    live: "https://fmr.org/",
    github: "",
  },
];
