import "./MainProducts.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import MainProduct from "../MainProduct/MainProduct";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../hooks/axios";

const MainProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`/api/store/products`)
      .then((res) => {
        if (res.status <= 300 && res.status >= 200) {
          setProducts(res.data.results.slice(0,6));
          console.log(res.data.results);
          setLoading(false);
        }
      })
      .then((res) => {
        // console.log(products);
        // console.log(res.data.results);
      });
    // setProducts(JSON.parse(localStorage.getItem("products")));
  }, []);
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
          {loading
            ? ""
            : products.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <Link className="mainProducts__Link" to={`/products/${product.id}`}>
                      <MainProduct product={product}/>
                    </Link>
                  </SwiperSlide>
                );
              })}
          
        </Swiper>
      </div>
    </div>
  );
};

export default MainProducts;
