import "./MainProduct.scss";
import { FaStar } from "react-icons/fa";

const MainProduct = () => {
  const price=135000;

  return (
    <div className="mainProduct">
      <img
        src="	https://nr-ecommerce.iran.liara.run/media/images/detail1.f45e3a4d9bfeafd2f70b_ecQft5P.jpg"
        alt=""
        className="mainProduct__img"
      />
      <div className="mainProduct__colors">
        <div className="mainProduct__color"></div>
        <div className="mainProduct__color"></div>
        <div className="mainProduct__color"></div>
      </div>
      <div className="mainProduct__title"> محصول زیاد</div>
      <div className="mainProduct__dec">خیلی خیلی محصول</div>
      <div className="mainProduct__rates">
        <div className="mainProduct__rate">
          (73 نظر)   4.3
          <FaStar className="star" />
        </div>
        <div className="mainProduct__price">{price.toLocaleString()}</div>
      </div>
    </div>
    //	https://chisnghiax.com/ciseco/static/media/5.9ddc0dff360795c6f5b5.png
  );
};

export default MainProduct;
