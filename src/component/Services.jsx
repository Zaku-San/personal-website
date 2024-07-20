import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faObjectGroup,
  faCode,
  faChartSimple,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import Technology from "./Technology.jsx";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  AOS.init();
  return (
    <>
      <section
        className="services w-full bg-second  flex justify-center items-center flex-col box-border py-24 text-light"
        id="services"
      >
        <h1 className="text-kuning text-center" data-aos="fade-up" data-aos-duration="800">
          Services
        </h1>
        <div className="header text-center w-1/3" >
          <h2 className="text-2xl font-bold mb-3" data-aos="fade-up" data-aos-duration="1000">
            Apa Yang Dapat Saya Lakukan?
          </h2>
          <p className="" data-aos="fade-up" data-aos-duration="1100">
            berikut merupakan beberapa keahlian yang dapat saya lakukan selama 2
            tahun berada di jurusan PPLG (Pengembangan Perangkat Lunak dan Game)
          </p>
        </div>
        <div className="boxes flex mt-10 w-full justify-between items-center px-28  gap-10 py-5">
          <div className="box bg-main w-1/4 h-72 flex flex-col justify-center items-center font-extrabold hover:text-kuning hover:bg-light" data-aos="fade-right" data-aos-duration="1000" >
            <FontAwesomeIcon icon={faObjectGroup} className="text-6xl mb-6 " />
            <h4 className=""> UI/UX Design </h4>
          </div>
          <div className="box bg-main w-1/4 h-72 flex flex-col justify-center items-center font-extrabold hover:text-kuning hover:bg-light" data-aos="fade-right" data-aos-duration="1300">
            <FontAwesomeIcon icon={faCode} className="text-6xl mb-6 " />
            <h4>Web Development</h4>
          </div>
          <div className="box bg-main w-1/4 h-72 flex flex-col justify-center items-center font-extrabold hover:text-kuning hover:bg-light" data-aos="fade-right" data-aos-duration="1400">
            <FontAwesomeIcon icon={faChartSimple} className="text-6xl mb-6 " />
            <h4>Data Analayst</h4>
          </div>
          <div className="box bg-main w-1/4 h-72 flex flex-col justify-center items-center font-extrabold hover:text-kuning hover:bg-light" data-aos="fade-right" data-aos-duration="1500">
            <FontAwesomeIcon icon={faPhotoFilm} className="text-6xl mb-6" />
            <h4>Video Editor</h4>
          </div>
        </div>
        <Technology />
      </section>
    </>
  );
};

export default Services;
