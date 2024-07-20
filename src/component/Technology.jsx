import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faBootstrap,
  faReact,
  faLaravel,
  faVuejs,
  faFigma,
  faPinterest,
  faStackOverflow,
  faUnity,
  faNode,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

const Technology = () => {
  AOS.init();
  return (
    <>
      <div className="Technology mt-10 w-full  px-12 md:px-28 flex flex-col">
        <p className="text-kuning  ">Technology that i use :</p>
        <div className="icons py-4 flex flex-wrap gap-7 justify-between">
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-4xl text-orange-500"
            />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="text-4xl text-blue-600"
            />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon icon={faJs} className="text-4xl text-yellow-300" />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon icon={faPhp} className="text-4xl text-blue-300" />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon
              icon={faBootstrap}
              className="text-4xl text-purple-600"
            />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon
              icon={faReact}
              className="text-4xl text-teal-400"
            />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon
              icon={faLaravel}
              className="text-4xl text-red-600"
            />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon
              icon={faVuejs}
              className="text-4xl text-green-400"
            />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon icon={faNode} className="text-4xl text-lime-500" />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon
              icon={faFigma}
              className="text-4xl text-orange-500"
            />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon
              icon={faPinterest}
              className="text-4xl text-red-600"
            />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon
              icon={faStackOverflow}
              className="text-4xl text-orange-400"
            />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon icon={faUnity} className="text-4xl text-black" />
          </div>
          <div
            className="w-16 h-16 bg-white rounded-full text-center flex justify-center items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl text-slate-900"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
