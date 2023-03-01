import "./MainCategories.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import MainProduct from "../MainProduct/MainProduct";
import { Link } from "react-router-dom";
import MainCategory from "../MainCategory/MainCategory";

const MainCategories = () => {
  return (
    <div className="mainCategories">
      <div className="mainCategories__container">
        <div className="mainCategories__titles">
          <div className="mainCategories__title">کتگوری جدید</div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* <Link className="mainCategories__Link" to=""> */}
            <MainCategory bgcolor='#F4F2DF'/>
            {/* </Link> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <Link className="mainCategories__Link" to=""> */}
            <MainCategory bgcolor='#FEF2F2' />
            {/* </Link> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <Link className="mainCategories__Link" to=""> */}
            <MainCategory bgcolor='#E6ECF5'/>
            {/* </Link> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <Link className="mainCategories__Link" to=""> */}
            <MainCategory bgcolor='#E6ECF5'/>
            {/* </Link> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <Link className="mainCategories__Link" to=""> */}
            <MainCategory bgcolor='#E6ECF5'/>
            {/* </Link> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainCategories;
