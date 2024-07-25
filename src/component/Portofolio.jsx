import React from "react";
import rumah from "../assets/rumah.png";
import webKelas from "../assets/web-kelas.png";
import bubble from "../assets/bubble.png"
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "./Certificate";

const Portofolio = () => {
  AOS.init();
  return (
    <>
      <section
        className="portofolio text-white bg-main flex  flex-col items-center py-10 px-14 h-full box-border "
        id="portofolio"
      >
        <p
          className="h5 uppercase text-kuning"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          portofolio
        </p>
        <div
          className="header text-center w-1/3"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl font-bold mb-3">
            Portofolio yang telah saya buat
          </h2>
          <p className="">
            berikut merupakan beberapa project yang telah saya kerjakan
          </p>
        </div>

        <div className="portofolio flex-col md:flex-row w-full mt-10 flex gap-10   ">
          <div
            className="box w-full md:w-1/3 shadow-xl hover:scale-90 pb-5 hover:border-2 "
            data-aos="flip-down"
            data-aos-duration="1250"
          >
            <img src={rumah} alt="" />
            <a
              className="text-lg font-bold text-kuning mx-3 "
              href="https://sewa-rumah-app.vercel.app/"
              target="_blank"
            >
              Omah Web Slicing{" "}
            </a>
            <p className="mx-3">
              Simple slice design with darkmode feature using native javascript{" "}
              <br /> <span className="text-kuning">note:</span>
            </p>
          </div>
          <div
            className="box w-full md:w-1/3 shadow-xl hover:scale-90 pb-5 hover:border-2 "
            data-aos="flip-down"
            data-aos-duration="1250"
          >
            <img src={webKelas} alt="" />
            <a
              className="text-lg font-bold text-kuning mx-3 "
              href="https://pplgtworu.info//"
              target="_blank"
            >
              Website Kelas{" "}
            </a>
            <p className="mx-3">
              Using React, Bootstrap, Swiper js <br />{" "}
              <span className="text-kuning">note:</span>
            </p>
          </div>
          <div
            className="box w-full md:w-1/3 shadow-xl hover:scale-90 pb-5 hover:border-2 "
            data-aos="flip-down"
            data-aos-duration="1250"
          >
            <img src={bubble} alt="" />
            <a
              className="text-lg font-bold text-kuning mx-3 "
              href="https://bubble-theta.vercel.app/"
              target="_blank"
            >
              Bubble Bash Web Slicing{" "}
            </a>
            <p className="mx-3">
              responsive website using html and css native <br />{" "}
              <span className="text-kuning">note:</span>
            </p>
          </div>
          <div className="box w-full flex justify-center items-center md:w-1/3 shadow-xl pb-5">
            <a className="text-xl font-bold text-kuning mx-3">Coming Soon! </a>
          </div>
        </div>

        <Certificate />
      </section>
    </>
  );
};

export default Portofolio;
