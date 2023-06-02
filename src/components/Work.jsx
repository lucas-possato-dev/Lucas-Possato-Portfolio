import React from "react";
import PhotographerWork from "../assets/p.png";
import PizzaWork from "../assets/PizzaWork.png";
import DataWork from "../assets/DataWork.png";
import TradingWork from "../assets/TradingWork.png";
import MovieAppWork from "../assets/MovieAppWork.png";
import metaversus from "../assets/metaversus.png";

const Work = () => {
  return (
    <div
      name="projetos"
      className="md:h-screen w-full text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            Projetos
          </p>
          <p className="py-4">Esses são alguns dos meus projetos recentes.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${MovieAppWork})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-[6px]">
                React JS, SAAS, Axios
              </span>
              <div className="pt-8 text-center">
                <a href="https://movie-app-pi-cyan.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Aplicativo
                  </button>
                </a>
                <a href="https://github.com/lucas-possato-dev/Movie-App">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${PhotographerWork})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-[6px]">
                React JS, Tailwind, Framer-Motion
              </span>
              <div className="pt-8 text-center">
                <a href="https://photographer-portfolio-brown.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Aplicativo
                  </button>
                </a>
                <a href="https://github.com/lucas-possato-dev/Photographer-Portfolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${DataWork})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-[6px]">
                React JS, Tailwind
              </span>
              <div className="pt-8 text-center">
                <a href="https://data-analytic-react-project.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Aplicativo
                  </button>
                </a>
                <a href="https://github.com/lucas-possato-dev/Data-Analytic-React-Project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${PizzaWork})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-[6px]">
                Styled-Components
              </span>
              <div className="pt-8 text-center">
                <a href="https://restaurant-website-with-react-and-styled-components.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Aplicativo
                  </button>
                </a>
                <a href="https://github.com/lucas-possato-dev/Restaurant-Website-With-React-and-Styled-Components">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TradingWork})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-[6px]">
                React JS, Tailwind
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-tailwind-website-page.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Aplicativo
                  </button>
                </a>
                <a href="https://github.com/lucas-possato-dev/React-Tailwind-Website-Page">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${metaversus})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-[6px]">
                Next 13, Framer Motion, Tailwind
              </span>
              <div className="pt-8 text-center">
                <a href="https://metaversus-framer-motion-project.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Aplicativo
                  </button>
                </a>
                <a href="https://github.com/lucas-possato-dev/Metaversus-Framer-Motion-Project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
