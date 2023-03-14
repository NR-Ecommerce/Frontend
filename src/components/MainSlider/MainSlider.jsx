import "./MainSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSearch } from "react-icons/bi";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const MainSlider = () => {
  return (
    <div className="mainSlider">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        initialSlide="0"
        navigation={true}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mainSlider__container">
            <div className="mainSlider__texts">
              <div className="mainSlider__miniTitle">
                در این فصل بهترین رو پیدا کن ! 🔥
              </div>
              <div className="mainSlider__title">مجموعه ای خاص برای همه</div>
              <div className="mainSlider__butCon">
                <div className="mainSlider__button">
                  مشاهده بیشتر
                  <BiSearch className="mainSlider__button-icon" />
                </div>
              </div>
            </div>

            <img
              src="https://chisnghiax.com/ciseco/static/media/hero-right-2.cb4660d930692248be75.png"
              alt=""
              className="mainSlider__img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mainSlider__container">
            <div className="mainSlider__texts">
              <div className="mainSlider__miniTitle">
                در این فصل بهترین رو پیدا کن ! 🔥
              </div>
              <div className="mainSlider__title">مجموعه ای خاص برای همه</div>
              <div className="mainSlider__butCon">
                <div className="mainSlider__button">
                  مشاهده بیشتر
                  <BiSearch className="mainSlider__button-icon" />
                </div>
              </div>
            </div>

            <img
              src="https://chisnghiax.com/ciseco/static/media/hero-right-3.3563ead7c7be2a32eb30.png"
              alt=""
              className="mainSlider__img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mainSlider__container">
            <div className="mainSlider__texts">
              <div className="mainSlider__miniTitle">
                در این فصل بهترین رو پیدا کن ! 🔥
              </div>
              <div className="mainSlider__title">مجموعه ای خاص برای همه</div>
              <div className="mainSlider__butCon">
                <div className="mainSlider__button">
                  مشاهده بیشتر
                  <BiSearch className="mainSlider__button-icon" />
                </div>
              </div>
            </div>

            <img
              src="https://chisnghiax.com/ciseco/static/media/hero-right-2.cb4660d930692248be75.png"
              alt=""
              className="mainSlider__img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
