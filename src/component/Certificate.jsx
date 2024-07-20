import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AlwaysNgoding from "../assets/always-ngoding.jpg";
import CssMagician from "../assets/Certificate CSS Magician Series 2024.jpg";
import LigaSmk from "../assets/Certificate Liga SMK - Coding Clash .jpg";
import Pelatihan from "../assets/Certificate Pelatihan SMKCoding 2023 .jpg";
import Progate1 from "../assets/progate1.png";
import Progate2 from "../assets/progate2.png";
import Camp from "../assets/Sertifikat Coding Camp Front End .jpg";
import Seminar from "../assets/sertifikat seminar literasi digital.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";
import { Pagination } from 'swiper/modules';

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Certificate = () => {
    AOS.init()
  return (
    <>
      <div className="certificate w-full mt-10 border-t-4 border-t-kuning py-5  flex flex-col  ">
        <h1 className="text-2xl font-bold  w-full mb-5" data-aos="fade-right" data-aos-duration="900">My Certificate:</h1>
        <Swiper
          slidesPerView={'3'}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            330: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full m-0 shadow-2xl "
          data-aos="fade-up" data-aos-duration="900"
        >
          <SwiperSlide>
            <img
              src={AlwaysNgoding}
              alt=""
              className="h-52 object-cover w-full md:h-72"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CssMagician}
              alt=""
              className="h-52 object-cover w-full md:h-72"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={LigaSmk} alt="" className="h-52 object-cover w-full md:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pelatihan} alt="" className="h-52 object-cover w-full md:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Progate1} alt="" className="h-52 object-cover w-full md:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Progate2} alt="" className="h-52 object-cover w-full md:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Camp} alt="" className="h-52 object-cover w-full md:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Seminar} alt="" className="h-52 object-cover w-full md:h-72" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Certificate;
