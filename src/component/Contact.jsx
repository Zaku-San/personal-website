import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {faXTwitter} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    
    AOS.init()
  return (
    <>
      <section className="contact bg-second text-light px-6 md:px-14 pt-10 pb-20 flex flex-col items-center box-border" id="contact">
        <div className="header text-center  flex flex-col items-center w-full ">
          <h2 className="text-kuning" data-aos="fade-up" data-aos-duration="900">Contact Me</h2>
          <h1 className="text-2xl font-bold" data-aos="fade-up" data-aos-duration="1100">Ways To Contact Me</h1>
          <p className=" w-full   md:w-2/3 lg:1/3 mt-2" data-aos="fade-up" data-aos-duration="1200">
            Silahkan hubungi melalui beberapa cara dibawah jika ingin menanyakan
            sesuatu mengenai saya
          </p>
        </div>

        <div className="cards flex mt-5 w-full  gap-3 md:gap-5 flex-col md:flex-row">
          <div className="card text-kuning flex gap-2 items-center  bg-main  w-full md:w-1/3 py-2 justify-center" data-aos="fade-right" data-aos-duration="900">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>mz8620054@gmail.com</p>
          </div>
          <div className="card text-kuning flex gap-2 items-center  bg-main  w-full md:w-1/3 py-2 justify-center" data-aos="fade-right" data-aos-duration="900">
            <FontAwesomeIcon icon={faPhone} />
            <p>+62 812 8115 3152</p>
          </div>
          <div className="card text-kuning flex gap-2 items-center bg-main  w-full md:w-1/3 py-2 justify-center" data-aos="fade-right" data-aos-duration="900">
          <FontAwesomeIcon icon={faXTwitter} />
            <p>Twitter</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
