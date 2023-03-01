import MainProduct from "../MainProduct/MainProduct";
import "./CategoryFilters.scss";

const CategoryFilters = () => {
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
              <label for="vehicle1"> کیف</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat2"
                value="2"
              />
              <label for="vehicle2"> کفش</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label for="vehicle3"> لپ تاپ</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label for="vehicle3">اکسسوری</label>
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
              <label for="vehicle1"> قرمز</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat2"
                value="2"
              />
              <label for="vehicle2"> آبی</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label for="vehicle3">زرد</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label for="vehicle3">سبز</label>
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
              <label for="vehicle1"> S</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat2"
                value="2"
              />
              <label for="vehicle2"> L</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label for="vehicle3">XL</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label for="vehicle3">XXL</label>
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
              <label for="vehicle1"> پرفروش ترین</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat2"
                value="2"
              />
              <label for="vehicle2"> گران ترین</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label for="vehicle3">ارزان ترین</label>
            </div>
            <div className="categoryFilters__inputs">
              <input
                className="categoryFilters__input"
                type="checkbox"
                name="cat3"
                value="3"
              />
              <label for="vehicle3">جدید ترین</label>
            </div>
          </div>
        </div>
        <div className="categoryFilters__left">
          <div className="categoryFilters__item">
            <MainProduct />
          </div>
          <div className="categoryFilters__item">
            <MainProduct />
          </div>
          <div className="categoryFilters__item">
            <MainProduct />
          </div>
          <div className="categoryFilters__item">
            <MainProduct />
          </div>
          <div className="categoryFilters__item">
            <MainProduct />
          </div>
          <div className="categoryFilters__item">
            <MainProduct />
          </div>

          <div className="categoryFilters__item">
            <MainProduct />
          </div>
          <div className="categoryFilters__item">
            <MainProduct />
          </div>
          <div className="categoryFilters__item">
            <MainProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;


