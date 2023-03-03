import { Link } from "react-router-dom";
import MainProduct from "../MainProduct/MainProduct";
import "./CategoryFilters.scss";
import { useEffect, useState } from "react";
import axiosInstance from "../../hooks/axios";

const CategoryFilters = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`/api/store/products`)
      .then((res) => {
        if (res.status <= 300 && res.status >= 200) {
          setProducts(res.data);
          console.log(res.data);
          setLoading(false);
        }
      })
      .then((res) => {
        console.log(products);
      });
    // setProducts(JSON.parse(localStorage.getItem("products")));
  }, []);
  return (
    <div className="categoryFilters">
      <div className="categoryFilters__container">
        <div className="categoryFilters__right">
          <div className="categoryFilters__box">
            <div className="categoryFilters__box-title">کالکشن</div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat1"
                value="1"
              />
              <label htmlFor="vehicle1"> کیف</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat2"
                value="2"
              />
              <label htmlFor="vehicle2"> کفش</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label htmlFor="vehicle3"> لپ تاپ</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label htmlFor="vehicle3">اکسسوری</label>
            </div>
          </div>
          <div className="categoryFilters__box">
            <div className="categoryFilters__box-title">رنگ</div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat1"
                value="1"
              />
              <label htmlFor="vehicle1"> قرمز</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat2"
                value="2"
              />
              <label htmlFor="vehicle2"> آبی</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label htmlFor="vehicle3">زرد</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label htmlFor="vehicle3">سبز</label>
            </div>
          </div>
          <div className="categoryFilters__box">
            <div className="categoryFilters__box-title">سایز</div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat1"
                value="1"
              />
              <label htmlFor="vehicle1"> S</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat2"
                value="2"
              />
              <label htmlFor="vehicle2"> L</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label htmlFor="vehicle3">XL</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label htmlFor="vehicle3">XXL</label>
            </div>
          </div>
          <div className="categoryFilters__box">
            <div className="categoryFilters__box-title">فیلتر</div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat1"
                value="1"
              />
              <label htmlFor="vehicle1"> پرفروش ترین</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat2"
                value="2"
              />
              <label htmlFor="vehicle2"> گران ترین</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label htmlFor="vehicle3">ارزان ترین</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label htmlFor="vehicle3">جدید ترین</label>
            </div>
          </div>
        </div>
        <div className="categoryFilters__left">
          {loading
            ? ""
            : products.map((product) => {
                return (
                  <Link key={product.id} to={`/products/${product.id}`} className="categoryFilters__item">
                    <MainProduct  product={product}/>
                  </Link>
                );
              })}
          {/* <Link to='/singleProduct' className="categoryFilters__item">
            <MainProduct />
          </Link>
          <Link to='/singleProduct' className="categoryFilters__item">
            <MainProduct />
          </Link>
          <Link to='/singleProduct' className="categoryFilters__item">
            <MainProduct />
          </Link>
          <Link to='/singleProduct' className="categoryFilters__item">
            <MainProduct />
          </Link>
          <Link to='/singleProduct' className="categoryFilters__item">
            <MainProduct />
          </Link>
          <Link to='/singleProduct' className="categoryFilters__item">
            <MainProduct />
          </Link>

          <Link to='/singleProduct' className="categoryFilters__item">
            <MainProduct />
          </Link>
          <Link to='/singleProduct' className="categoryFilters__item">
            <MainProduct />
          </Link>
          <Link to='/singleProduct' className="categoryFilters__item">
            <MainProduct />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
