import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./carousel.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  return (
    <div className="container">
      <h1 className="heading">categories</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="./images/01.jpg" alt="slide_image" />
          <div className="slideDesc">
            <p>branding title</p>
            <span>explore</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/02.jpg" alt="slide_image" />
          <div className="slideDesc">
            <p>branding title</p>
            <span>explore</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/01.jpg" alt="slide_image" />
          <div className="slideDesc">
            <p>branding title</p>
            <span>explore</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/02.jpg" alt="slide_image" />
          <div className="slideDesc">
            <p>branding title</p>
            <span>explore</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/01.jpg" alt="slide_image" />
          <div className="slideDesc">
            <p>branding title</p>
            <span>explore</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/02.jpg" alt="slide_image" />
          <div className="slideDesc">
            <p>branding title</p>
            <span>explore</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/01.jpg" alt="slide_image" />
          <div className="slideDesc">
            <p>branding title</p>
            <span>explore</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/02.jpg" alt="slide_image" />
          <div className="slideDesc">
            <p>branding title</p>
            <span>explore</span>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FontAwesomeIcon icon={faAngleLeft} className="sliderNav" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FontAwesomeIcon icon={faAngleRight} className="sliderNav" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
