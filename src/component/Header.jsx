import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faArrowDown,
  faCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import MuhammadZakiCv from "../../public/pdf/my-cv.pdf";

const Header = () => {
  AOS.init();
  return (
    <>
      <section
        className="main-container bg-main h-screen flex  text-center text-light px-10 box-border justify-center md:justify-between "
        id="home"
      >
        <div
          className="left flex w-1/2 items-center "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="name  p-5 w-full">
            <h1 className="uppercase text-5xl font-bold text-light text-left">
              muhammad zaki<span className="text-yellow-300">.</span>{" "}
            </h1>
            <div className="social-media  text-left mt-7 ">
              <a
                href="https://www.instagram.com/mhmmd.zak1/"
                target="_blank"
                className=" border-t-4 border-t-yellow-300 pt-2 hover:text-pink"
              >
                Instagram |
              </a>
              <a
                href="https://github.com/Zaku-San"
                target="_blank"
                className="hover:text-blue-900"
              >
                {" "}
                Github
              </a>
            </div>
            <div className="buttons flex gap-3 mt-7">
              <a href="https://wa.me/6281281153152" target="_blank" className="uppercase border border-yellow-300 p-2 justify-center  text-yellow-300 flex items-center tracking-widest hover:border-light hover:text-light hover:scale-90">
                contact me{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ml-5 "
                />
              </a>
              <a
                href={MuhammadZakiCv}
                download={"MuhammadZakiCv.pdf"}
                className="uppercase border border-biru p-2  text-biru flex items-center tracking-widest hover:border-light hover:text-light hover:scale-90"
              >
                download CV{" "}
                <FontAwesomeIcon icon={faCircleDown} className="ml-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="right  w-1/2 text-left flex  items-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="introduction  p-3 flex flex-col">
            <h1 className="uppercase text-xl text-kuning">introduction</h1>
            <h2 className="text-2xl text-light font-bold">
              UI/UX Designer, <br /> Full Stack Web Developer
            </h2>

            <p className="mt-3">
              Saya Merupakan murid SMK Negeri 1 Ciomas Yang Memiliki Minat Dalam Bidang Web Development, Pembuatan Game, dan Senang Bermain Dengan Teknologi.
            </p>

            <a className="mt-4 text-kuning" href="#services">
              Learn more <FontAwesomeIcon icon={faArrowDown} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
