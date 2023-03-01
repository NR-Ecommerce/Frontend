import "./MainProducts.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import MainProduct from "../MainProduct/MainProduct";
import { Link } from "react-router-dom";

const MainProducts = () => {
  return (
    <div className="mainProducts">
      <div className="mainProducts__container">
        <div className="mainProducts__titles">
          <div className="mainProducts__title">محصولات جدید</div>
        </div>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link className="mainProducts__Link" to="/SingleProduct">
              <MainProduct />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="mainProducts__Link" to="/SingleProduct">
              <MainProduct />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="mainProducts__Link" to="/SingleProduct">
              <MainProduct />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="mainProducts__Link" to="/SingleProduct">
              <MainProduct />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="mainProducts__Link" to="/SingleProduct">
              <MainProduct />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="mainProducts__Link" to="/SingleProduct">
              <MainProduct />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainProducts;
